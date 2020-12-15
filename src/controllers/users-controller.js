const _ = require('lodash')
const authService = require('../services/authentication-service')
const { messages } = require('../contrants/message')
const { publicUser } = require('../contrants/publicData')


exports.register = (req, res, next) => {
  const user = _.get(req, 'body', {})
  user.password = authService.hashedPassword(user.password)

  authService.register(user).then(result => {
    if(result === null) 
      return res.status(400).send({
        statusCode: 400,
        errorMessage: messages.DUPLICATE_EMAIL,
      })
    return res.status(200).send({
      statusCode: 200,
      message: messages.REGISTER_SUCCESS,
      data: result
    });
  }).catch(
    err => {
      return res.status(400).send({
        errorMessage: err
      })
    }
  )
}

exports.login = (req, res, next) => {
  const user = _.get(req, 'body', {})

  authService.login(user).then(result => {
    if (result.user === null) {
      return res.status(422).send({
        statusCode: 422,
        message: messages.BAD_CREDENTIALS
      })
    }
    const userPublic = _.pick(result.user, _.keys(publicUser))
    userPublic.fullName = userPublic.lastName + ' ' + userPublic.firstName
    
    return res.status(200).send({
      statusCode: 200,
      message: messages.LOGIN_SUCCESS,
      data: userPublic,
      token: result.token
    })
  })
}


