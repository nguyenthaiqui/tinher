const express = require('express')
const router = express.Router()

const userController = require('../controllers/users-controller')
const validateMiddleware = require('../middleware/Validator')
const UserSchema = require('../schemas/users-schema')

router.post('/register',
  validateMiddleware(UserSchema.registerSchema, 'body'),
  userController.register)

router.post('/login',
  validateMiddleware(UserSchema.loginSchema, 'body'),
  userController.login)

module.exports = router