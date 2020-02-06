const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/tasks', controller.getTasks)


module.export = router
