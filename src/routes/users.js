const express = require('express')
const router = express.Router()
// const Schemas = require('../../libs/Schemas');
const userController = require('../controllers/users-controller')
const schemas = require('../schemas/users-schema')

// router.route('/:id')
//   .delete(personController.delete)
//   .put(personController.update)
//   .get(personController.read);

module.exports = router