const Task = require('./Task')

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
    await Task.create(req.body)
  } catch (err) {
    console.log(err)
  }
}
