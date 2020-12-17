const _ = require('lodash')
const { publicUser } = require('../constants/publicData')

exports.toPublicUser = user => {
  const userPublic = _.pick(user, _.keys(publicUser))
  userPublic.fullName = userPublic.lastName + ' ' + userPublic.firstName
  return userPublic
}