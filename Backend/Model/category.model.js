const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
    unique: true,
  },
});

const categoryModel = mongoose.model("category", CategorySchema);

module.exports = categoryModel;
