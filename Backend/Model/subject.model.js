const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  category: {
    type: Object,
    required: true,
  },
});

const SubjectModel = mongoose.model("subject", SubjectSchema);

module.exports = SubjectModel;
