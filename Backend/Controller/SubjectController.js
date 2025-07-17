// Adding Subject

const SubjectModel = require("../Model/subject.model");

exports.addSubject = async (req, res) => {
  try {
    const { subjectName, price, description, trainer, category } = req.body;

    const thumbnail = req.file ? req.file.filename : null;

    if (!subjectName || !price || !description || !trainer || !category) {
      return res.status(500).json({
        message: "All fields are required including image",
      });
    }

    const newSubject = await SubjectModel.create({
      subjectName,
      price,
      description,
      trainer,
      thumbnail,
      category,
    });
    if (!newSubject) {
      return res.status(500).json({ message: "Subject Not saved" });
    } else {
      return res
        .status(201)
        .json({ message: "Subject added succesfully", data: newSubject });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Error" });
  }
};
