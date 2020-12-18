const Joi = require('joi')

exports.registerSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  password: Joi.string().min(3).required(),
  gender: Joi.valid('Male', 'Female', 'Other').required(),
  dateOfBirth: Joi.date().required(),
  selfDescribe: Joi.string().optional()
})

exports.loginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().min(3).required()
})

exports.updateProfileSchema = Joi.object({
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  gender: Joi.valid('Male', 'Female', 'Other').required(),
  dateOfBirth: Joi.date().required(),
  selfDescribe: Joi.string().optional(),
})

