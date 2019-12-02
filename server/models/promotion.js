const mongoose = require('mongoose')

const promotionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  city: {
    type: String
  },
  start: {
    type: Date
  },
  end: {
    type: Date
  },
  programmes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Programme',
      required: true
    }
  ],
  formateurs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  ],
  eleves: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  ]
})

promotionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Promotion', promotionSchema)
