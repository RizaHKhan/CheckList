const Task = require('./Task')

exports.getTasks = async (req, res) => {
    await Task.findOne({ _id: req.body.id })
}
