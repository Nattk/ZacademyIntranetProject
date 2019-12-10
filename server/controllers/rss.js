const rssRouter = require('express').Router()
const Rss = require('../models/rss')
const Promotion = require('../models/promotion')

rssRouter.get('/', async (req, res) => {
  const allRss = await Rss.find({})
  res.json(allRss.map(rss => rss.toJSON()))
})

rssRouter.get('/:id', async (req, res, next) => {
  try {
    const foundrss = await Rss.findById(req.params.id)
    if (foundrss) {
      res.json(foundrss.toJSON())
    } else {
      res.status(404).end()
    }
  } catch (e) {
    next(e)
  }
})

rssRouter.post('/', async (request, response, next) => {
  const promotion = await Promotion.findById(request.body.promotionId)
  const rss = new Rss({ ...request.body, promotion: promotion.id || null, date: new Date() })

  try {
    const savedRss = await rss.save()

    response.json(savedRss.toJSON())
  } catch (exception) {
    next(exception)
  }
})

rssRouter.put('/:id', async (request, response, next) => {
  const body = request.body

  try {
    const rssToUpdate = await Rss.findByIdAndUpdate(request.params.id, { ...body, date: new Date() }, { new: true })
    response.json(rssToUpdate.toJSON())
  } catch (error) {
    next(error)
  }
})

rssRouter.delete('/:id', async (request, response, next) => {
  try {
    await Rss.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = rssRouter
