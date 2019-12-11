const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()
const User = require('../models/user')
const Promotion = require('../models/promotion')
const security = require('./security')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('promotion', { title: 1 })
  response.json(users.map(u => u.toJSON()))
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

usersRouter.post('/', async (request, response, next) => {
  const promotion = await Promotion.findById(request.body.promotionId)

  try {
    const user = await security.checkUser(request)
    const body = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const newUser = new User({
      firstName: body.firstName,
      lastName: body.lastName,
      passwordHash,
      phone: body.phone,
      email: body.email,
      role: body.role,
      help: body.help,
      avatar: request.body.avatar,
      important: request.body.utile || false,
      date: new Date(),
      promotion: promotion ? promotion._id : null
    })
    if (user.role === 'admin' || user.role === 'superadmin') {
      const savedUser = await newUser.save()
      if (promotion) {
        savedUser.role === 'eleve' ? promotion.eleves = promotion.eleves.concat(savedUser._id) : promotion.formateurs = promotion.formateurs.concat(savedUser._id)
        await promotion.save()
      }
      response.json(savedUser)
    } else return response.status(401).json({ error: "Vous n'avez pas les droits suffisants" })
  } catch (exception) {
    next(exception)
  }
})

usersRouter.put('/:id', async (request, response, next) => {
  const promotion = await Promotion.findById(request.body.promotionId)

  try {
    let user = request.body

    if (request.body.password) {
      const saltRounds = 10
      const passwordHash = await bcrypt.hash(request.body.password, saltRounds)
      user = new User({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        passwordHash,
        phone: request.body.phone,
        email: request.body.email,
        role: request.body.role,
        help: request.body.help,
        avatar: request.body.avatar,
        important: request.body.utile || false,
        date: new Date(),
        promotion: promotion ? promotion._id : null
      })
    }

    const userToUpdate = await User.findByIdAndUpdate(request.params.id, user, { new: true })
    if (promotion &&
      (promotion.eleves.filter(x => x.toString() === userToUpdate.id).length === 0 ||
      promotion.formateurs.filter(x => x.toString() === userToUpdate.id).length === 0)) {
      userToUpdate.role === 'eleve'
        ? promotion.eleves = promotion.eleves.concat(userToUpdate._id)
        : promotion.formateurs = promotion.formateurs.concat(userToUpdate._id)
      await promotion.save()
    }
    response.json(userToUpdate)
  } catch (exception) {
    next(exception)
  }
})

usersRouter.delete('/:id', async (request, response, next) => {
  const user = await security.checkUser(request)
  try {
    if (user.role === 'admin' || user.role === 'superadmin') {
      await User.findByIdAndRemove(request.params.id)
      response.status(204).end()
    } else return response.status(401).json({ error: "Vous n'avez pas les droits suffisants" })
  } catch (error) {
    next(error)
  }
})

module.exports = usersRouter
