const Joi = require('joi')

exports.registerSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  password: Joi.string().min(3).required(),
  gender: Joi.valid('Male', 'Female', 'Other').required()
})

exports.loginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().min(3).required()
})