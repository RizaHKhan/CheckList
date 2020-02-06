const controller = require('./controller')
const express = require('express')
const router = express.Router()

router.get('/tasks', controller.getTasks)

module.exports = router
