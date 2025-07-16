const express = require("express");
const { userRegister, loginUser } = require("../Controller/UseController");
const { addCategory } = require("../Controller/CategoryController");
const router = express.Router();

router.post("/register", userRegister);
router.post("/login", loginUser);
router.post("/add-category", addCategory);

module.exports = router;
