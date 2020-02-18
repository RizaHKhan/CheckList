const { sendAllTasks } = require('../email/email')
const Task = require('../models/Task')

exports.sendEmail = async (req, res) => {
  try {
    const tasks = await Task.find({})
    await sendAllTasks(req.body.email, tasks)
    res.send()
  } catch (err) {
    res.status(404).send(err)
  }
}
