import User from "../models/user"; // import the User model from your project

function addUserToDatabase(user, role) {
  const newUser = new User({
    email: user.email,
    isMentor: role === "mentor" ? 1 : 0,
  });

  newUser.save((err) => {
    if (err) {
      console.error(err);
      return false;
    }
    return true;
  });
}

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
  const userExists = checkIfUserExists(email);
  if (userExists) {
    return res.status(400).json({
      status: 400,
      error: "User already exists",
    });
  }
  const role = /^\d+$/.test(email) ? 0 : 1; // check if email contains only integers
  // set role accordingly
  req.user.role = role === 0 ? "student" : "mentor";
  // add user to database with appropriate role
  addUserToDatabase(req.user, req.user.role);
  return true;
};

export default addMentorOrStudentWithHelpOfEmail;
