const mongoose = require('mongoose')

const sequenceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
})

sequenceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Sequence', sequenceSchema)
