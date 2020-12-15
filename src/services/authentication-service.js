const _ = require('lodash')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const config = require('../config/index')
const Token = require('../middleware/Token')
const { publicUser } = require('../contrants/publicData')

exports.hashedPassword = password => bcrypt.hashSync(password, config.get('saltRounds'))

exports.comparePassword = (password, hashedPassword) => bcrypt.compareSync(password, hashedPassword)

exports.register = async data => {
  if (await User.findOne({ email: data.email }))
    return null
  const user = await User.create(data)
  return user
}

exports.login = async data => {
  const user = await User.findOne({ email: data.email })
  if (this.comparePassword(data.password, user.password)) {
    const token = Token.createLoginToken(user)
    const userPublic = _.pick(user, _.keys(publicUser))
    userPublic.fullName = userPublic.lastName + ' ' + userPublic.firstName
    return {
      user: userPublic,
      token
    }
  }
  return null
}