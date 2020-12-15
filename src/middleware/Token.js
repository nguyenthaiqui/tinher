const jwt = require('jsonwebtoken')
const config = require('../config')

exports.createLoginToken = (data) => jwt.sign({
  _id: data._id,
  email: data.email,
  gender: data.profile,
  firstName: data.firstname,
  lastName: data.lastName,
  fullName: data.lastName + data.fullName
}, config.get('jwt.secret'))
