const path = require('path')
const _ = require('lodash')
const Resize = require('./resize')

exports.upload = async (req, res) => {
  // folder upload
  let imagePath = path.join(__dirname, '../public/images')
  // call class Resize
  const fileUpload = new Resize(imagePath);
  if (!req.file) {
    res.status(401).json({ error: 'Please provide an image' });
  }
  const filename = await fileUpload.save(req.file.buffer);

  return res.status(200).json({ name: filename });
}