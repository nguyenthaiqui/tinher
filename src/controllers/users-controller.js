const _ = require('lodash')
const authService = require('../services/authentication-service')
const userService = require('../services/users-service')
const { messages } = require('../contrants/message')
const { decodeToken } = require('../middleware/Token')


exports.register = (req, res, next) => {
  const user = _.get(req, 'body', {})
  user.password = authService.hashedPassword(user.password)

  authService.register(user).then(result => {
    if (result === null)
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

    return res.status(200).send({
      statusCode: 200,
      message: messages.LOGIN_SUCCESS,
      data: {
        token: result.token,
        publicUser: result.user,
      }
    })
  })
}

exports.read = async (req, res, next) => {
  const { id } = _.get(req, 'params', {})
  const user = await userService.read(id)
  if (!_.isEmpty(user))
    return res.status(200).send({
      statusCode: 200,
      message: messages.GET_USER_SUCCESS,
      data: user,
    })
  return res.status(400).send({
    statusCode: 400,
    message: messages.USER_NOTFOUND,
  })
}

exports.update = async (req, res, next) => {
  const { id } = _.get(req, 'params', {})
  const data = _.get(req, 'body', {})
  const { authorization } = _.get(req, 'headers', {})
  const user = decodeToken(authorization.split(' ')[1])
  if (user._id === id) {
    const result = await userService.update(id, data)
    return res.send(result)
  }
  else res.status(401).json({
    statusCode: 401,
    message: "Unathorization"
  })
}

exports.updatePhoto = async (req, res, next) => {
  console.log(req.files)
  return res.send(req.file)
}