import User from "../models/user.js";

const addMentorOrStudentWithHelpOfEmail = (req, res) => {
  const regex = /\S+@\S+\.\S+/;
  const { email } = req.body;
  if (!regex.test(email)) {
    return res.status(400).json({
      status: 400,
      error: "Please enter a valid email",
    });
  }
  // check if user already exists in the database
  const userExists = User.findOne({ email });
  if (userExists) {
    return res.status(400).json({
      status: 400,
      error: "User already exists",
    });
  }
  const role = /^\d+$/.test(email) ? 0 : 1; // check if email contains only integers
  // set role accordingly
  const userRole = role === 0 ? "student" : "mentor";
  if (userRole === "mentor") {
    return true;
  }
  return false;
};

export default addMentorOrStudentWithHelpOfEmail;
