const followsRouter = require('express').Router()
const Follow = require('../models/follow')
const Promotion = require('../models/promotion')

followsRouter.get('/', async (req, res) => {
  const allFollows = await Follow.find({})
  res.json(allFollows.map(follow => follow.toJSON()))
})

followsRouter.get('/:id', async (req, res, next) => {
  try {
    const foundfollow = await Follow.findById(req.params.id)
    if (foundfollow) {
      res.json(foundfollow.toJSON())
    } else {
      res.status(404).end()
    }
  } catch (e) {
    next(e)
  }
})

followsRouter.post('/', async (request, response, next) => {
  const promotion = await Promotion.findById(request.body.promotionId)
  const follow = new Follow({ ...request.body, promotion: promotion.id, date: new Date() })

  try {
    const savedFollow = await follow.save()
    response.json(savedFollow.toJSON())
  } catch (exception) {
    next(exception)
  }
})

followsRouter.put('/:id', async (request, response, next) => {
  const body = request.body

  try {
    const followToUpdate = await Follow.findByIdAndUpdate(request.params.id, { ...body, date: new Date() }, { new: true })
    response.json(followToUpdate.toJSON())
  } catch (error) {
    next(error)
  }
})

followsRouter.delete('/:id', async (request, response, next) => {
  try {
    await Follow.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = followsRouter
