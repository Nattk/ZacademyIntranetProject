const ressourcesRouter = require('express').Router()
const Ressource = require('../models/ressource')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

ressourcesRouter.get('/', async (req, res) => {
  const allRessources = await Ressource.find({}).populate('user', { firstName: 1, lastName: 1 })
  res.json(allRessources.map(ressource => ressource.toJSON()))
})

ressourcesRouter.get('/:id', async (req, res, next) => {
  try {
    const foundressource = await Ressource.findById(req.params.id)
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
  if (!request.body.title || !request.body.url) {
    return response.status(400).json({ error: 'content missing!' })
  }
  console.log('request.body', request.body)

  const token = getTokenFrom(request)

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)
    const newRessource = new Ressource({ ...request.body, user: user.id })

    const savedRessource = await newRessource.save()
    user.ressources = user.ressources.concat(savedRessource._id)
    await user.save()
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
    const ressourceToUpdate = await Ressource.findByIdAndUpdate(request.params.id, body, { new: true })
    response.json(ressourceToUpdate.toJSON())
  } catch (error) {
    next(error)
  }
})

module.exports = ressourcesRouter
