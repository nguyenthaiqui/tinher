const _ = require('lodash')
const User = require('../models/user')
const { publicUser } = require('../constants/publicData')

exports.read = async id => {
  const user = await User.findById(id)
  const userPublic = _.pick(user, _.keys(publicUser))
  userPublic.fullName = userPublic.lastName + ' ' + userPublic.firstName
  return userPublic
}

exports.update = async (id, data) => {
  const user = await User.findById(id)
  if (user) {
    user.firstName = data.firstName,
      user.lastName = data.lastName,
      user.gender = data.gender
      user.updated_at = Date.now()
  }
  const result = await user.save()
  const userPublic = _.pick(result, _.keys(publicUser))
  userPublic.fullName = userPublic.lastName + ' ' + userPublic.firstName
  return userPublic
}
