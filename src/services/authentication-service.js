const _ = require('lodash')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const config = require('../config/index')
const Token = require('../middleware/Token')
const utils = require('../utils')
const { messages } = require('../constants/message')

exports.hashedPassword = password => bcrypt.hashSync(password, config.get('saltRounds'))

exports.comparePassword = (password, hashedPassword) => bcrypt.compareSync(password, hashedPassword)

exports.register = async data => {
  if (await User.findOne({ email: data.email }))
    return null
  const user = await User.create(data)
  return utils.toPublicUser(user)
}

exports.login = async data => {
  const user = await User.findOne({ email: data.email })
  if (user === null) return {
    user: null,
  }
  if (this.comparePassword(data.password, user.password)) {
    const token = Token.createLoginToken(user)

    return {
      user: utils.toPublicUser(user),
      token
    }
  }
  return {
    user: null,
  }
}