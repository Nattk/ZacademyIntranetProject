const carouselsRouter = require('express').Router()
const Carousel = require('../models/carousel')
const Promotion = require('../models/promotion')
const security = require('./security')

carouselsRouter.get('/', async (req, res) => {
  const allCarousels = await Carousel.find({})
  res.json(allCarousels.map(carousel => carousel.toJSON()))
})

carouselsRouter.get('/:id', async (req, res, next) => {
  try {
    const foundcarousel = await Carousel.findById(req.params.id)
    if (foundcarousel) {
      res.json(foundcarousel.toJSON())
    } else {
      res.status(404).end()
    }
  } catch (e) {
    next(e)
  }
})

carouselsRouter.post('/', async (request, response, next) => {
  const promotion = await Promotion.findById(request.body.promotionId)
  const carousel = new Carousel({ ...request.body, promotion: promotion.id })

  try {
    const savedCarousel = await carousel.save()
    response.json(savedCarousel.toJSON())
  } catch (exception) {
    next(exception)
  }
})

carouselsRouter.put('/:id', async (request, response, next) => {
  const body = request.body

  try {
    const carouselToUpdate = await Carousel.findByIdAndUpdate(request.params.id, body, { new: true })
    response.json(carouselToUpdate.toJSON())
  } catch (error) {
    next(error)
  }
})

carouselsRouter.delete('/:id', async (request, response, next) => {
  try {
    await Carousel.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = carouselsRouter
