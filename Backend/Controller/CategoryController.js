const categoryModel = require("../Model/category.model");

// Add Add new Category
exports.addCategory = async (req, res) => {
  await categoryModel.create({
    categoryName: req.body.categoryName,
  });

  return res.json({ message: "Category Created" });
};

// Fetch All category
exports.fetchAllCategory = async (req, res) => {
  const category = await categoryModel.find();

  return res.json(category);
};

// Update Category
exports.upadteCategory = async (req, res) => {
  try {
    const editId = req.params.id;

    const upadteCategoryName = req.body.categoryName;

    await categoryModel.findByIdAndUpdate(editId, {
      categoryName: upadteCategoryName,
    });
    return res.json({ message: "Category updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Update failed" });
  }
};

// Delete Category
exports.deleteCategory = async (req, res) => {
  try {
    const deleteId = req.params.id;

    await categoryModel.findByIdAndDelete(deleteId);
    return res.json({ message: "Category deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete, error in Controller" });
  }
};
