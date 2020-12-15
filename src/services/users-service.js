const bcrypt = require('bcrypt')
const User = require('../models/user')
const config = require('../config/index')

exports.hashedPassword = password => bcrypt.hashSync(password, config.get('saltRounds'))

exports.create = async data => {
  const user = User.create(data)
  return user
}