import React, { useContext, useState } from "react";
import axios from "axios";
import { ThemeContext } from "../context/themeContext";
import "../assets/css/addcategory.css"; // Make sure to create this CSS file

function AddCategory() {
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const { darkMode } = useContext(ThemeContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!category.trim()) {
      setMessage("Category name cannot be empty");
      return;
    }

    axios
      .post("http://localhost:4000/api/add-category", {
        categoryName: category,
      })
      .then((res) => {
        setMessage(res.data.message || "Category added successfully");
        setCategory("");
      })
      .catch((err) => {
        console.error(err);
        setMessage("Something went wrong");
      });
  };

  return (
    <div className={`add-category-container ${darkMode ? "dark-mode" : ""}`}>
      <form
        className="add-category-form shadow p-4 rounded"
        onSubmit={onSubmit}
      >
        <h2 className="text-center mb-4">Add New Category</h2>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="addCategory"
            placeholder="Enter new category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mb-3">
          Add
        </button>

        {message && (
          <div className="alert alert-info text-center fade-in">{message}</div>
        )}
      </form>
    </div>
  );
}

export default AddCategory;
