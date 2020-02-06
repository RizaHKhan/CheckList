const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    description: String,
    timestamps: true
})

module.export = mongoose.model('Task', TaskSchema)
