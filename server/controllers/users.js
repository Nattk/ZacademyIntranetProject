const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()
const User = require('../models/user')
const Promotion = require('../models/promotion')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('promotion', { title: 1 })
  response.json(users.map(u => u.toJSON()))
})

usersRouter.post('/', async (request, response, next) => {
  const promotion = await Promotion.findById(request.body.promotionId)

  try {
    const body = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
      firstName: body.firstName,
      lastName: body.lastName,
      passwordHash,
      phone: body.phone,
      email: body.email,
      role: body.role,
      promotion: promotion ? promotion._id : null
    })

    const savedUser = await user.save()
    if (promotion) {
      savedUser.role === 'eleve' ? promotion.eleves = promotion.eleves.concat(savedUser._id) : promotion.formateurs = promotion.formateurs.concat(savedUser._id)
      await promotion.save()
    }
    response.json(savedUser)
  } catch (exception) {
    next(exception)
  }
})

usersRouter.put('/', async (request, response, next) => {
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
  try {
    await User.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = usersRouter
