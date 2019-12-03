const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const ressourcesRouter = require('./controllers/ressources')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const promotionsRouter = require('./controllers/promotions')
const programmesRouter = require('./controllers/programmes')
const modulesRouter = require('./controllers/modules')
const sousmodulesRouter = require('./controllers/sousmodules')
const sequencesRouter = require('./controllers/sequences')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')
const logger = require('./utils/logger')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('static'))
app.use(bodyParser.json())
app.use(middleware.requestLogger)

app.use('/api/ressources', ressourcesRouter)
app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)
app.use('/api/promotions', promotionsRouter)
app.use('/api/programmes', programmesRouter)
app.use('/api/modules', modulesRouter)
app.use('/api/sousmodules', sousmodulesRouter)
app.use('/api/sequences', sequencesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
