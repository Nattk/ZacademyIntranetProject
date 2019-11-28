const mongoose = require('mongoose')

const moduleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  sousmodules: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Sousmodule',
      required: true
    }
  ],
  sequences: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Sequence',
      required: true
    }
  ]
})

moduleSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Module', moduleSchema)
