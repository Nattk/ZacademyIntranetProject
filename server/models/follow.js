const mongoose = require('mongoose')

const followSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  twitter: {
    type: String,
    match: [/(twitter.com)/, 'Veuillez entrer une URL twitter valide.']
  },
  github: {
    type: String,
    match: [/(github.com|gitlab.com)/, 'Veuillez entrer une URL github ou gitlab valide']
  },
  medium: {
    type: String,
    match: [/(medium.com)/, 'Veuillez entrer une URL medium valide.']
  },
  date: {
    type: Date
  },
  promotion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Promotion',
    required: true
  }
})

followSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Follow', followSchema)
