const express = require('express')
const router = express.Router()

router.use('/user', require('./users'))
router.use('/auth', require('./authentication'))
router.use('/image', require('./image'))

module.exports = router;