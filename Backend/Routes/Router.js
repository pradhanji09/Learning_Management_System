const express = require("express");
const { userRegister, loginUser } = require("../Controller/UseController");
const {
  addCategory,
  fetchAllCategory,
  upadteCategory,
  deleteCategory,
} = require("../Controller/CategoryController");
const router = express.Router();

router.post("/register", userRegister);
router.post("/login", loginUser);
router.post("/add-category", addCategory);
router.get("/fetchCategory", fetchAllCategory);
router.put("/update-category/:id", upadteCategory);
router.delete("/delete-category/:id", deleteCategory);

module.exports = router;
