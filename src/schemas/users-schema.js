const Joi = require('joi')

exports.registerSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  password: Joi.string().min(3).required(),
  gender: Joi.valid('Male', 'Female', 'Other').required(),
  dateOfBirth: Joi.date().required(),
  selfDescribe: Joi.string()
})

exports.loginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().min(3).required()
})

exports.updateProfileSchema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  gender: Joi.valid('Male', 'Female', 'Other').required(),
  dateOfBirth: Joi.date(),
  selfDescribe: Joi.string(),
})

exports.updatePhotoSchema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  gender: Joi.valid('Male', 'Female', 'Other').required(),
  dateOfBirth: Joi.date(),
  selfDescribe: Joi.string(),
  images: Joi.array().items(Joi.binary())
})