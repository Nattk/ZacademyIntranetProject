const sequencesRouter = require('express').Router()
const Sequence = require('../models/sequence')
const Sousmodule = require('../models/sousmodule')
const Module = require('../models/module')

sequencesRouter.get('/', async (req, res) => {
  const allSequences = await Sequence.find({})
  res.json(allSequences.map(sequence => sequence.toJSON()))
})

sequencesRouter.get('/:id', async (req, res, next) => {
  try {
    const foundsequence = await Sequence.findById(req.params.id)
    if (foundsequence) {
      res.json(foundsequence.toJSON())
    } else {
      res.status(404).end()
    }
  } catch (e) {
    next(e)
  }
})

sequencesRouter.post('/', async (request, response, next) => {
  const sousmodule = await Sousmodule.findById(request.body.sousmoduleId)
  const module = await Module.findById(request.body.moduleId)

  const sequence = new Sequence(request.body)

  try {
    const savedSequence = await sequence.save()
    if (sousmodule) {
      sousmodule.sequences = sousmodule.sequences.concat(savedSequence._id)
      await sousmodule.save()
    }
    if (module) {
      module.sequences = module.sequences.concat(savedSequence._id)
      await module.save()
    }
    response.json(savedSequence.toJSON())
  } catch (exception) {
    next(exception)
  }
})

sequencesRouter.put('/:id', async (request, response, next) => {
  const module = await Module.findById(request.body.moduleId)
  const sousmodule = await Sousmodule.findById(request.body.sousmoduleId)
  const body = request.body

  try {
    const sequenceToUpdate = await Sequence.findByIdAndUpdate(request.params.id, body, { new: true })
    if (sousmodule && sousmodule.sequences.filter(x => x.toString() === sequenceToUpdate.id).length === 0) {
      sousmodule.sequences = sousmodule.sequences.concat(sequenceToUpdate._id)
      await sousmodule.save()
    }
    if (module && module.sequences.filter(x => x.toString() === sequenceToUpdate.id).length === 0) {
      module.sequences = module.sequences.concat(sequenceToUpdate._id)
      await module.save()
    }
    response.json(sequenceToUpdate.toJSON())
  } catch (error) {
    next(error)
  }
})

sequencesRouter.delete('/:id', async (request, response, next) => {
  try {
    await Sequence.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = sequencesRouter
