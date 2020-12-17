const path = require('path')
const _ = require('lodash')
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')
const { publicData, publicImage } = require('../constants/publicData')
const config = require('../config')

cloudinary.config(config.get('cloudinary'))

const streamUpload = (file) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      (error, result) => {
        if (result)
          resolve(result)
        else
          reject(error)
      }
    )

    streamifier.createReadStream(file.buffer).pipe(stream)
  })
}

exports.upload = async file => {
  const result = await streamUpload(file)

  return _.pick(result, _.keys(publicImage))
}

exports.bulkUpload = async files  => {
  const promises = files.map(async file => {
    return await streamUpload(file)
  })

  const responses = await Promise.all(promises)

  let result = []
  responses.map(item => {
    result.push(_.pick(item, _.keys(publicImage)))
  })
  return result
}