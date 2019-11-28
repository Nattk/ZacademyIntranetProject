const modulesRouter = require('express').Router()
const Module = require('../models/module')
const Programme = require('../models/programme')

modulesRouter.get('/', async (req, res) => {
  const allModules = await Module.find({})
    .populate('sousmodules', { title: 1 })
    .populate('sequences', { title: 1 })
  res.json(allModules.map(module => module.toJSON()))
})

modulesRouter.get('/:id', async (req, res, next) => {
  try {
    const foundmodule = await Module.findById(req.params.id)
    if (foundmodule) {
      res.json(foundmodule.toJSON())
    } else {
      res.status(404).end()
    }
  } catch (e) {
    next(e)
  }
})

modulesRouter.post('/', async (request, response, next) => {
  const programme = await Programme.findById(request.body.programmeId)
  const createdModule = new Module(request.body)
  try {
    const savedModule = await createdModule.save()
    if (programme) {
      programme.modules = programme.modules.concat(savedModule._id)
      await programme.save()
    }
    response.json(savedModule.toJSON())
  } catch (exception) {
    next(exception)
  }
})

modulesRouter.delete('/:id', async (request, response, next) => {
  try {
    await Module.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (error) {
    next(error)
  }
})

modulesRouter.put('/:id', async (request, response, next) => {
  const programme = await Programme.findById(request.body.programmeId)
  const body = request.body

  try {
    const moduleToUpdate = await Module.findByIdAndUpdate(request.params.id, body, { new: true })
    if (programme && programme.modules.filter(x => x.toString() === moduleToUpdate.id).length === 0) {
      programme.modules = programme.modules.concat(moduleToUpdate._id)
      await programme.save()
    }
    response.json(moduleToUpdate.toJSON())
  } catch (error) {
    next(error)
  }
})

modulesRouter.delete('/:id', async (request, response, next) => {
  try {
    await Module.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = modulesRouter
