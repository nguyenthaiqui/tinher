const imageService = require('../services/image-service')
const { messages } = require('../constants/message')


exports.upload = async (req, res, next) => {
  const file = req.file
  const result = await imageService.upload(file)
  return res.status(200).json({
    statusCode: 200,
    message: messages.UPLOAD_IMAGE_SUCCESS,
    data: result
  })
}

exports.bulkUpload = async (req, res, next) => {
  const files = req.files
  const result = await imageService.bulkUpload(files)
  return res.status(200).json({
    statusCode: 200,
    message: messages.UPLOAD_IMAGE_SUCCESS,
    data: result
  })
}