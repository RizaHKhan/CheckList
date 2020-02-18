const taskController = require('./controllers/taskController')
const emailController = require('./controllers/emailController')
const categoryController = require('./controllers/categoryController')
const express = require('express')
const router = express.Router()

// Task Controllers
router.get('/getTasks', taskController.getTasks)
router.post('/addTasks', taskController.addTasks)
router.post('/deleteTask', taskController.deleteTask)
router.post('/updateTask', taskController.updateTask)

// Email Controllers
router.post('/sendEmail', emailController.sendEmail)

// Category Controllers
router.get('/getCategories', categoryController.getCategories)
router.post('/addCategory', categoryController.addCategory)
router.post('/deleteCategory', categoryController.deleteCategory)

module.exports = router
