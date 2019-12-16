const mongoose = require('mongoose')

const carouselSchema = new mongoose.Schema({
  photo1: {
    type: String,
    required: true
  },
  photo2: {
    type: String
  },
  photo3: {
    type: String
  },
  photo4: {
    type: String
  },
  promotion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Promotion',
    required: true
  }
})

carouselSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Carousel', carouselSchema)
