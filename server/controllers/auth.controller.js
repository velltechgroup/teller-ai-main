const User = require("../models/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await User.create({ email, password: hashedPassword, username, createdAt });

    // Create a token
    const token = createSecretToken(user._id);

    // Set the token as a cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    // Send a success response
    res.status(201).json({ message: "User signed up successfully", success: true, user });
  } catch (error) {
    console.error(error);
    // Send an error response
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
