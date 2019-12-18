const ressourcesRouter = require('express').Router()
const Ressource = require('../models/ressource')
const User = require('../models/user')
const Promotion = require('../models/promotion')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

ressourcesRouter.get('/', async (req, res) => {
  const allRessources = await Ressource.find({}).populate('promotion', { title: 1 }).populate('user')
  res.json(allRessources.map(ressource => ressource.toJSON()))
})

ressourcesRouter.get('/:id', async (req, res, next) => {
  try {
    const foundressource = await Ressource.findById(req.params.id).populate('promotion', { title: 1 }).populate('user')
    if (foundressource) {
      res.json(foundressource.toJSON())
    } else {
      res.status(404).end()
    }
  } catch (e) {
    next(e)
  }
})

ressourcesRouter.post('/', async (request, response, next) => {
  const promotion = await Promotion.findById(request.body.promotionId)
  if (!request.body.title || !request.body.url) {
    return response.status(400).json({ error: 'content missing!' })
  }
  const token = getTokenFrom(request)
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)
    const newRessource = new Ressource({ ...request.body, user: user.id, promotion: promotion, date: new Date() })

    const savedRessource = await newRessource.save()
    response.json(savedRessource.toJSON())
  } catch (exception) {
    next(exception)
  }
})

ressourcesRouter.delete('/:id', async (request, response, next) => {
  try {
    await Ressource.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (error) {
    next(error)
  }
})

ressourcesRouter.put('/:id', async (request, response, next) => {
  const body = request.body

  try {
    const ressourceToUpdate = await Ressource.findByIdAndUpdate(request.params.id, { ...body, date: new Date() }, { new: true })
    response.json(ressourceToUpdate.toJSON())
  } catch (error) {
    next(error)
  }
})

module.exports = ressourcesRouter
