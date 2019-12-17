const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()
const User = require('../models/user')
const Promotion = require('../models/promotion')
const security = require('./_security')

usersRouter.get('/', async (req, res, next) => {
  try {
    if (req.get('authorization')) {
      const user = await security.checkUser(req)
      const foundUser = await User.findById(user.id).populate('promotion', { title: 1 })
      res.json(foundUser.toJSON())
    }
    const users = await User.find({}).populate('promotion', { title: 1 })
    res.json(users.map(u => u.toJSON()))
  } catch (e) {
    next(e)
  }
})

usersRouter.get('/:id', async (req, res, next) => {
  try {
    const foundUser = await User.findById(req.params.id)
    if (foundUser) {
      res.json(foundUser.toJSON())
    } else {
      res.status(404).end()
    }
  } catch (e) {
    next(e)
  }
})

usersRouter.post('/', async (req, res, next) => {
  const promotion = await Promotion.findById(req.body.promotionId)

  try {
    const body = req.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
      firstName: body.firstName,
      lastName: body.lastName,
      passwordHash,
      phone: body.phone,
      email: body.email,
      role: body.role,
      help: body.help,
      avatar: req.body.avatar,
      important: req.body.important || false,
      date: new Date(),
      promotion: promotion ? promotion._id : null
    })

    const savedUser = await user.save()
    if (promotion) {
      savedUser.role === 'eleve' ? promotion.eleves = promotion.eleves.concat(savedUser._id) : promotion.formateurs = promotion.formateurs.concat(savedUser._id)
      await promotion.save()
    }
    res.json(savedUser)
  } catch (exception) {
    next(exception)
  }
})

usersRouter.put('/:id', async (req, res, next) => {
  try {
    const promotion = await Promotion.findById(req.body.promotionId)
    const user = req.body
    user.promotion = req.body.promotionId

    const userToUpdate = await User.findOneAndUpdate(req.params.id, user, { runValidators: true })

    if (userToUpdate.role === 'formateur' && promotion && promotion.formateurs.filter(x => x.toString() === userToUpdate.id).length === 0) {
      promotion.formateurs = promotion.formateurs.concat(userToUpdate._id)
      await promotion.save()
    }

    if (userToUpdate.role === 'eleve' && promotion && promotion.eleves.filter(x => x.toString() === userToUpdate.id).length === 0) {
      promotion.eleves = promotion.eleves.concat(userToUpdate._id)
      await promotion.save()
    }
    res.json(userToUpdate)
  } catch (exception) {
    next(exception)
  }
})

usersRouter.delete('/:id', async (req, res, next) => {
  try {
    await User.findByIdAndRemove(req.params.id)
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = usersRouter
