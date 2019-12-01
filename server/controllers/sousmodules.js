const sousmodulesRouter = require('express').Router()
const Module = require('../models/module')
const Sousmodule = require('../models/sousmodule')

sousmodulesRouter.get('/', async (req, res) => {
  const allSousmodules = await Sousmodule.find({})
    .populate('sequences', { title: 1 })
  res.json(allSousmodules.map(module => module.toJSON()))
})

sousmodulesRouter.get('/:id', async (req, res, next) => {
  try {
    const foundmodule = await Sousmodule.findById(req.params.id)
    if (foundmodule) {
      res.json(foundmodule.toJSON())
    } else {
      res.status(404).end()
    }
  } catch (e) {
    next(e)
  }
})

sousmodulesRouter.post('/', async (request, response, next) => {
  const module = await Module.findById(request.body.moduleId)

  const sousmodule = new Sousmodule(request.body)

  try {
    const savedSousmodule = await sousmodule.save()
    if (module) {
      module.sousmodules = module.sousmodules.concat(savedSousmodule._id)
      await module.save()
    }
    response.json(savedSousmodule.toJSON())
  } catch (exception) {
    next(exception)
  }
})

sousmodulesRouter.delete('/:id', async (request, response, next) => {
  try {
    await Sousmodule.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (error) {
    next(error)
  }
})

sousmodulesRouter.put('/:id', async (request, response, next) => {
  const module = await Module.findById(request.body.moduleId)
  const body = request.body

  try {
    const sousmoduleToUpdate = await Sousmodule.findByIdAndUpdate(request.params.id, body, { new: true })
    if (module && module.sousmodules.filter(x => x.toString() === sousmoduleToUpdate.id).length === 0) {
      module.sousmodules = module.sousmodules.concat(sousmoduleToUpdate._id)
      await module.save()
    }
    response.json(sousmoduleToUpdate.toJSON())
  } catch (error) {
    next(error)
  }
})

sousmodulesRouter.delete('/:id', async (request, response, next) => {
  try {
    await Sousmodule.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = sousmodulesRouter
