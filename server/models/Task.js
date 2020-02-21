const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }]
},
{
  timestamps: true
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
