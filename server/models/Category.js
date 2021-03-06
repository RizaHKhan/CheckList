const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    unique: true
  }
},
{
  timestamps: true
})

const Task = mongoose.model('Category', CategorySchema)

module.exports = Task
