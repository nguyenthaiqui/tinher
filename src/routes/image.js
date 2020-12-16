const express = require('express')
const router = express.Router()
const uploadMiddleware = require('../middleware/UploadImage')
const imageService = require('../services/image-service')

router.post('/upload',uploadMiddleware.single('image'), imageService.upload)

module.exports = router