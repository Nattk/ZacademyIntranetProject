const ressourcesRouter = require('express').Router()
const Ressource = require('../models/ressource')
const Promotion = require('../models/promotion')
const security = require('./security')

ressourcesRouter.get('/', async (req, res) => {
  const allRessources = await Ressource.find({}).populate('promotion', { title: 1 })
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
  const promotion = await Promotion.findById(request.body.promotionId)
  if (!request.body.title || !request.body.url) {
    return response.status(400).json({ error: 'content missing!' })
  }
  const user = await security.checkUser(request)

  try {
    if (user.role === 'admin' || user.role === 'superadmin') {
      const newRessource = new Ressource({ ...request.body, user: user.id, promotion: promotion.id, date: new Date() })

      const savedRessource = await newRessource.save()
      response.json(savedRessource.toJSON())
    } else return response.status(401).json({ error: "Vous n'avez pas les droits suffisants" })
  } catch (exception) {
    next(exception)
  }
})

ressourcesRouter.delete('/:id', async (request, response, next) => {
  const user = await security.checkUser(request)
  try {
    if (user.role === 'admin' || user.role === 'superadmin') {
      await Ressource.findByIdAndRemove(request.params.id)
      response.status(204).end()
    } else return response.status(401).json({ error: "Vous n'avez pas les droits suffisants" })
  } catch (error) {
    next(error)
  }
})

ressourcesRouter.put('/:id', async (request, response, next) => {
  const user = await security.checkUser(request)
  const body = request.body

  try {
    if (user.role === 'admin' || user.role === 'superadmin') {
      const ressourceToUpdate = await Ressource.findByIdAndUpdate(request.params.id, { ...body, date: new Date() }, { new: true })
      response.json(ressourceToUpdate.toJSON())
    } else return response.status(401).json({ error: "Vous n'avez pas les droits suffisants" })
  } catch (error) {
    next(error)
  }
})

module.exports = ressourcesRouter
