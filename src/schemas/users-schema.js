const Joi = require('joi')
const { schemaMessages } = require('../constants/message')

exports.registerSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required().messages({
      'string.email': schemaMessages.WRONG_FORMAT_EMAIL
    }),
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  password: Joi.string().min(3).required(),
  gender: Joi.valid('Male', 'Female', 'Other').required(),
  dateOfBirth: Joi.date().required().messages({
    'date': schemaMessages.WRONG_FORMAT_DOB
  }),
  selfDescribe: Joi.string().optional()
})

exports.loginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required().messages({
      'string.email': schemaMessages.WRONG_FORMAT_EMAIL
    }),
  password: Joi.string().min(3).required()
})

exports.updateProfileSchema = Joi.object({
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  gender: Joi.valid('Male', 'Female', 'Other').required(),
  dateOfBirth: Joi.date().required(),
  selfDescribe: Joi.string().optional(),
  images: Joi.array().items(Joi.string()).optional()
})

