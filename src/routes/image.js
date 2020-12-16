const express = require('express')
const router = express.Router()
const uploadMiddleware = require('../middleware/UploadImage')
const imageService = require('../services/image-service')

router.post('/upload',uploadMiddleware.single('image'), imageService.upload)
router.post('/upload/bulk', uploadMiddleware.array('images'), imageService.bulkUpload)

module.exports = router