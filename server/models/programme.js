const mongoose = require('mongoose')

const programmeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  modules: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Module',
      required: true
    }
  ]
})

programmeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Programme', programmeSchema)
