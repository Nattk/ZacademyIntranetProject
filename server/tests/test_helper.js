const Ressource = require('../models/ressource')
const User = require('../models/user')

const initialRessources = [
  {
    title: 'Bravosi recipes',
    content: 'George Martin',
    url: 'https://www.urbandictionary.com/define.php?term=not%20gonna%20happen'
  },
  {
    title: 'This is not a ressource',
    content: 'No Author',
    url: 'https://stackoverflow.com/'
  },
  {
    title: 'Third ressource',
    content: 'Elisabeth Giret',
    url: 'https://www.reddit.com/r/learnprogramming/comments/dwzkbv/what_is_bad_programming/',
    likes: 1
  }
]

const initialmodules = [
  {
    title: 'placeholder title'
  },
  {
    title: 'title n°2'
  },
  {
    title: 'third title'
  }
]

const initialUsers = [
  {
    firstName: 'norbert',
    lastName: 'nadir',
    phone: '0608060806',
    email: 'norbert@zenika.com',
    role: 'superadmin',
    id: '5ddc277dec28801edc02aa0a',
    password: 'norbert'
  },
  {
    ressources: [],
    firstName: 'firmin',
    lastName: 'giret',
    phone: '0606060606',
    email: 'firmin@zenika.com',
    role: 'eleve',
    id: '5ddc2792ec28801edc02aa0b',
    password: 'firmin'
  }
]

const nonExistingId = async () => {
  const ressource = new Ressource({ title: 'willremovethissoon' })
  await ressource.save()
  await ressource.remove()

  return ressource._id.toString()
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

const ressourcesInDb = async () => {
  const ressources = await Ressource.find({})
  return ressources.map(ressource => ressource.toJSON())
}

module.exports = {
  initialRessources,
  nonExistingId,
  ressourcesInDb,
  usersInDb,
  initialUsers,
  initialmodules
}
