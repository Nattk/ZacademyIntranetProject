const programmesRouter = require('express').Router()
const Programme = require('../models/programme')
const Promotion = require('../models/promotion')

programmesRouter.get('/', async (req, res) => {
  const allProgrammes = await Programme.find({})
    .populate('modules')
  res.json(allProgrammes.map(programme => programme.toJSON()))
})

programmesRouter.get('/:id', async (req, res, next) => {
  try {
    const foundprogramme = await Programme.findById(req.params.id)
    if (foundprogramme) {
      res.json(foundprogramme.toJSON())
    } else {
      res.status(404).end()
    }
  } catch (e) {
    next(e)
  }
})

programmesRouter.post('/', async (request, response, next) => {
  const promotion = await Promotion.findById(request.body.promotionId)

  const programme = new Programme(request.body)

  try {
    const savedProgramme = await programme.save()
    if (promotion) {
      promotion.programmes = promotion.programmes.concat(savedProgramme._id)
      await promotion.save()
    }

    response.json(savedProgramme.toJSON())
  } catch (exception) {
    next(exception)
  }
})

programmesRouter.put('/:id', async (request, response, next) => {
  const promotion = await Promotion.findById(request.body.promotionId)
  const body = request.body

  try {
    const programmeToUpdate = await Programme.findByIdAndUpdate(request.params.id, body, { new: true })
    if (promotion && promotion.programmes.filter(x => x.toString() === programmeToUpdate.id).length === 0) {
      promotion.programmes = promotion.programmes.concat(programmeToUpdate._id)
      await promotion.save()
    }
    response.json(programmeToUpdate.toJSON())
  } catch (error) {
    next(error)
  }
})

programmesRouter.delete('/:id', async (request, response, next) => {
  try {
    await Programme.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = programmesRouter
