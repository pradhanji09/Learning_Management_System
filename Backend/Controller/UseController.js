const UserModel = require("../Model/user.model");

exports.userRegister = async (req, res) => {
  const { name, email, password, dob, phone, gender, address, role, status } =
    req.body;

  if (!name || !email || !password || !dob || !phone || !address) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  try {
    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Create new user
    const newUser = new UserModel({
      name,
      email,
      password,
      dob,
      phone,
      address,
      gender,
      role: role || "student", // default role
      status: status || "active", // default status
    });
    // Save user to database
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }

  try {
    // Find user by email
    const user = await UserModel.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      redirect("/register");
      alert("User not found, please register");
    }

    // Check if password matches
    const isPasswordValid = (await user.password) === password; // Replace with proper hashing in production
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    // Successful login
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
      },
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
