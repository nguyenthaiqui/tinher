const express = require('express')
const router = express.Router()
const uploadMiddleware = require('../middleware/UploadImage')
const imageControllers = require('../controllers/image-controller')
const imageSchemas = require('../schemas/image-schema')
const validateMiddleware = require('../middleware/Validator')

router.post('/upload', uploadMiddleware.single('image'),
  validateMiddleware(imageSchemas.uploadSchema, 'file'),
  imageControllers.upload)
router.post('/upload/bulk', uploadMiddleware.array('images'),
  validateMiddleware(imageSchemas.bulkUploadSchema, 'files'),
  imageControllers.bulkUpload)

module.exports = router