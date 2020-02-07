const controller = require('./controller')
const express = require('express')
const router = express.Router()

router.get('/getTasks', controller.getTasks)
router.post('/addTasks', controller.addTasks)
router.post('/deleteTask', controller.deleteTask)

module.exports = router
