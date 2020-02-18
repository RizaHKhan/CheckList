const Category = require('../models/Category')

exports.addCategory = async (req, res) => {
  try {
    const category = await Category.create({ category: req.body.category })
    res.send(category)
  } catch (err) {
    res.send(err)
  }
}

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({})
    res.send(categories)
  } catch (err) {
    res.send(err)
  }
}

exports.deleteCategory = async (req, res) => {
  try {
    await Category.deleteOne({ _id: req.body._id })
    res.send()
  } catch (err) {
    res.send(err)
  }
}
