const Joi = require('joi')

exports.uploadSchema = Joi.object({
  fieldname: Joi.string(),
  originalname: Joi.string(),
  encoding: Joi.string(),
  mimetype: Joi.string().valid('image/png', 'image/jpeg', 'image/svg+xml').required(),
  buffer: Joi.object(),
  size: Joi.number().max(8000000).description('Maximum 8 MB').required()
})

exports.bulkUploadSchema = Joi.array().items(
  Joi.object().keys({
    fieldname: Joi.string(),
    originalname: Joi.string(),
    encoding: Joi.string(),
    mimetype: Joi.string().valid('image/png', 'image/jpeg', 'image/svg+xml').required(),
    buffer: Joi.object(),
    size: Joi.number().max(8000000).description('Maximum 8 MB').required()
  })
)