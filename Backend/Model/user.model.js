const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "student"],
    default: "student",
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
