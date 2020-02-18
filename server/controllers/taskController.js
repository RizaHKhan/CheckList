const mongoose = require('mongoose')
const Task = require('../models/Task')

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.send(tasks)
  } catch (err) {
    res.status(404).send(err)
  }
}

exports.addTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.send(task)
  } catch (err) {
    console.log(err)
  }
}

exports.deleteTask = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.body.id })
    res.send()
  } catch (err) {
    console.log(err)
  }
}

exports.updateTask = async (req, res) => {
  console.log(req.body)
  try {
    const ObjectId = mongoose.Types.ObjectId(req.body.task._id)
    await Task.updateOne({ _id: ObjectId }, { description: req.body.task.description })
    res.send()
  } catch (err) {
    console.log(err)
  }
}
