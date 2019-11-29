/* eslint-disable no-useless-escape */
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    minlength: 3,
    required: true
  },
  lastName: {
    type: String,
    minlength: 3,
    required: true
  },
  passwordHash: {
    type: String,
    minlength: 3
  },
  phone: {
    type: String,
    required: true,
    match: [/((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/, 'Veuillez utiliser un numéro de téléphone valide.']
  },
  email: {
    type: String,
    minlength: 3,
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Veuillez utiliser un email valide.'],
    unique: true
  },
  role: {
    type: String,
    enum: ['eleve', 'formateur', 'admin', 'superadmin'],
    required: true
  },
  help: {
    type: String,
    minlength: 3
  },
  promotion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Promotion'
  }
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  }
})

module.exports = mongoose.model('User', userSchema)