const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const promotionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: [true, 'promotion déjà existante']
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
  slack: {
    type: String,
    match: [/(app.slack.com)/, 'Veuillez entrer une url slack valide.']
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

promotionSchema.plugin(uniqueValidator)

promotionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Promotion', promotionSchema)
