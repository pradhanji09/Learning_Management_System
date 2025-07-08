const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = require("./Routes/Router");
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT || 4000}`);
});
