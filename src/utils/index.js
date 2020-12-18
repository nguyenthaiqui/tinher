const _ = require('lodash')
const { publicUser } = require('../constants/publicData')
const { decodeToken } = require('../middleware/Token')

exports.toPublicUser = user => {
  const userPublic = _.pick(user, _.keys(publicUser))
  userPublic.fullName = userPublic.lastName + ' ' + userPublic.firstName
  return userPublic
}

exports.verifyToken = (token, userId)=> {
  const user = decodeToken(token.split(' ')[1])
  return user._id === userId
}