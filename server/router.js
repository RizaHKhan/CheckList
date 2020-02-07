const controller = require('./controller')
const express = require('express')
const router = express.Router()

router.get('/getTasks', controller.getTasks)
router.post('/addTasks', controller.addTasks)
router.post('/deleteTask', controller.deleteTask)
router.post('/updateTask', controller.updateTask)

module.exports = router
