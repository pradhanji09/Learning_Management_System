const categoryModel = require("../Model/category.model");

exports.addCategory = async (req, res) => {
  await categoryModel.create({
    categoryName: req.body.categoryName,
  });

  return res.json({ message: "Category Created" });
};
