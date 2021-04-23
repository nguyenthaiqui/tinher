const express = require('express')
const router = express.Router()
const userController = require('../controllers/users-controller')
const schemas = require('../schemas/users-schema')
const { verifyToken } = require('../middleware/Token')
const uploadModdileware = require('../middleware/UploadImage')
const validateMiddleware = require('../middleware/Validator')

router.route('/profiles')
  .get(verifyToken, userController.read)
  .put(verifyToken,
    validateMiddleware(schemas.updateProfileSchema, 'body'),
    userController.update)

// router.route('/:id')
//   .delete(personController.delete)
//   .put(personController.update)
//   .get(personController.read);

module.exports = router