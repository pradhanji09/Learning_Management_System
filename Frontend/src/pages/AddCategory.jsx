import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { ThemeContext } from "../context/themeContext";
import "../assets/css/addcategory.css"; // Make sure to create this CSS file
import { Link, useNavigate } from "react-router-dom";

function AddCategory({ role }) {
  const navigate = useNavigate();

  // All states
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState([]);

  // For handling Edit
  const [editID, setEditId] = useState(null);
  const { darkMode } = useContext(ThemeContext);

  // Fetch All Category
  const fetchCategory = async () => {
    axios
      .get("http://localhost:4000/api/fetchCategory")
      .then((res) => {
        setCategories(res.data || []);
      })
      .catch((err) => {
        console.error(err);
        setMessage("Failed to Fetch All data");
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!category.trim()) {
      setMessage("Category name cannot be empty");
      return;
    }

    // When edit button click, handleEdit function event it sets editID to current cotegoryID, then when we are submitting if editID available it put the request
    if (editID) {
      axios
        .put(`http://localhost:4000/api/update-category/${editID}`, {
          categoryName: category,
        })
        .then((res) => {
          setMessage(res.data.message || "Catagory updated successfully");
          setCategory("");
          setEditId(null);
          // Fetching updated categories
          fetchCategory();
        })
        .catch((err) => {
          console.log(err);
          setMessage("Can not edit");
        });
    } else {
      axios
        .post("http://localhost:4000/api/add-category", {
          categoryName: category,
        })
        .then((res) => {
          setMessage(res.data.message || "Category added successfully");
          setCategory("");
          fetchCategory();
        })
        .catch((err) => {
          console.error(err);
          setMessage("Something went wrong");
        });
    }
  };

  // Update Some category
  const handeleUpdate = (category) => {
    setCategory(category.categoryName);
    setEditId(category._id);
    setMessage("Editing category.....");
  };

  // Delete one Category

  const handleDelete = async (deleteID) => {
    const deletecategory = confirm("Are you Sure you want to delte");

    if (deletecategory) {
      try {
        await axios.delete(
          `http://localhost:4000/api/delete-category/${deleteID}`
        );
        fetchCategory();
      } catch (error) {
        console.log(error);
        setMessage("Failed to Delete");
      }
    }
  };
  // Getting all Ctegories in first rendering
  useEffect(() => {
    if (!role || role !== "admin") {
      alert("Please try to login first");
      navigate("/");
    }
    fetchCategory();
  }, [role, navigate]);

  return (
    <div className={`add-category-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="container py-4">
        <div className="row g-4 justify-content-center">
          {/* Left Section: Form */}
          <div className="col-lg-5">
            <div className="category-card">
              <h3 className="form-title">
                {editID ? "Update" : "Add"} Category
              </h3>

              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter category name"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />

                <button type="submit" className="btn primary-btn w-100 mt-3">
                  {editID ? "Update" : "Add"} Category
                </button>

                {message && <p className="info-message mt-3">{message}</p>}
              </form>

              <Link to="/admin-dashboard" className="btn back-btn w-100 mt-4">
                <i className="fas fa-arrow-left me-2"></i>Back to Dashboard
              </Link>
            </div>
          </div>

          {/* Right Section: List */}
          <div className="col-lg-6">
            <div className="category-card">
              <h3 className="form-title">All Categories</h3>

              {categories.length === 0 ? (
                <p className="empty-text">No category found.</p>
              ) : (
                <ul className="category-list">
                  {categories.map((cat) => (
                    <li key={cat._id} className="category-item">
                      <span>{cat.categoryName}</span>
                      <div className="action-buttons">
                        <button
                          className="btn edit-btn"
                          onClick={() => handeleUpdate(cat)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn delete-btn"
                          onClick={() => handleDelete(cat._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
