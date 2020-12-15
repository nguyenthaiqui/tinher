const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const mongoose = require('mongoose')
const app = express()

app.use(logger('dev'))

//set header
app.use(cors())
app.use(helmet())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', require('./routes'))

mongoose.connect('mongodb://localhost:27017/tinher', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  console.log('Connected database')
}).catch(err => {
  console.log(`Could not connect to the database. Existing now... \n${err}`);
  process.exit();
})

module.exports = app