const promotionsRouter = require('express').Router()
const Promotion = require('../models/promotion')

promotionsRouter.get('/', async (req, res) => {
  const allPromotions = await Promotion.find({})
    .populate({
      path: 'programmes',
      populate: {
        path: 'modules',
        populate: {
          path: 'sousmodules',
          populate: {
            path: 'sequences'
          }
        }
      }
    })
    .populate('formateurs', { firstName: 1, lastName: 1 })
    .populate('eleves', { firstName: 1, lastName: 1 })
  res.json(allPromotions.map(promotion => promotion.toJSON()))
})

promotionsRouter.get('/:id', async (req, res, next) => {
  try {
    const foundpromotion = await Promotion.findById(req.params.id)
      .populate({
        path: 'programmes',
        populate: {
          path: 'modules',
          populate: {
            path: 'sousmodules',
            populate: {
              path: 'sequences'
            }
          }
        }
      })
      .populate('formateurs', { firstName: 1, lastName: 1 })
      .populate('eleves', { firstName: 1, lastName: 1 })
    if (foundpromotion) {
      res.json(foundpromotion.toJSON())
    } else {
      res.status(404).end()
    }
  } catch (e) {
    next(e)
  }
})

promotionsRouter.post('/', async (request, response, next) => {
  const promotion = new Promotion(request.body)

  try {
    const savedPromotion = await promotion.save()
    response.json(savedPromotion.toJSON())
  } catch (exception) {
    next(exception)
  }
})

promotionsRouter.put('/:id', async (request, response, next) => {
  const body = request.body

  try {
    const promotionToUpdate = await Promotion.findByIdAndUpdate(request.params.id, body, { new: true })
    response.json(promotionToUpdate.toJSON())
  } catch (error) {
    next(error)
  }
})

promotionsRouter.delete('/:id', async (request, response, next) => {
  try {
    await Promotion.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = promotionsRouter
