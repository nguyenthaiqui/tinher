const path = require('path')
const _ = require('lodash')
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')
// const Resize = require('./resize')

cloudinary.config({
  cloud_name: 'willnguyen',
  api_key: '245577489324558',
  api_secret: 'mnFdyV_JAoY8b-xFmjuVcHz2NWw'
})

const streamUpload = (req) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      (error, result) => {
        if (result)
          resolve(result)
        else
          reject(error)
      }
    )

    streamifier.createReadStream(req.file.buffer).pipe(stream)
  })
}

exports.upload = async (req, res) => {
  const result = await streamUpload(req)
  return res.status(200).json({
    originalSize: {
      width: result.width,
      height: result.height,
    },
    url: result.url,
  });
}