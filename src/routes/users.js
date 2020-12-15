const express = require('express')
const router = express.Router()
const userController = require('../controllers/users-controller')
const schemas = require('../schemas/users-schema')
const { verifyToken } = require('../middleware/Token')
const validateMiddleware = require('../middleware/Validator')

router.route('/:id')
  .get(verifyToken, userController.read)
  .patch(verifyToken,
    validateMiddleware(schemas.updateProfileSchema, 'body'),
    userController.update)

// router.route('/:id')
//   .delete(personController.delete)
//   .put(personController.update)
//   .get(personController.read);

module.exports = router