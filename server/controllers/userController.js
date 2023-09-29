import User from "../models/user.js";

const registerUser = async (req, res) => {
  try {
    const { college, name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    const user = new User({ college, name, email, password });
    await user.save();

    // Send a success response to the client
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export { registerUser };
