const Category = require('../models/Category')

exports.addCategory = async (req, res) => {
  try {
    console.log(req.body)
    await Category.create({ category: req.body.category })
  } catch (err) {
    res.send(err)
  }
}
