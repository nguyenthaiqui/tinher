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

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (authHeader) {
    const token = authHeader.split(' ')[1]
    jwt.verify(token, config.get('jwt.secret'), (err, user) => {
      if (err) {
        return res.status(403).send({
          statusCode: 403,
          message: "Forbidden"
        })
      }
      req.user = user
      next()
    });
  } else {
    res.status(401).send({
      statusCode: 401,
      message: "Unauthorized"
    })
  }
}

exports.decodeToken = token => jwt.decode(token, (err, data) => {
  if (err) throw new Error('Decode token error')
})