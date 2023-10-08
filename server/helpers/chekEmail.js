import User from "../models/user.js";

const setStudentMentor = async (email) => {
  const isMentor = /^\d+$/.test(email.split("@")[0]);
  return isMentor ? 0 : 1;
};

const addMentorOrStudentWithHelpOfEmail = async (req, res) => {
  const email = req.body;
  const regex = /\S+@\S+\.\S+/;
  if (!regex.test(email)) {
    return false;
  }
  // check if user already exists in the database
  const userExists = await User.findOne({ email });
  if (userExists) {
    return false;
  }
  const isMentorOrStud = await setStudentMentor(email);
  return isMentorOrStud;
};
export default addMentorOrStudentWithHelpOfEmail;

// function validateEmail(email) {
//   // Regular expression for validating email addresses
//   var emailRegex = /^([0-9]{10})@gmail\.com$|^([a-zA-Z]+)@gmail\.com$/;
//   return emailRegex.test(email);
// }

// function identifyUser(email) {
//   if (validateEmail(email)) {
//     var [, studentID, mentorName] = email.match(/^([0-9]{10})@gmail\.com$|^([a-zA-Z]+)@gmail\.com$/);

//     if (studentID) {
//       // Email format with 10-digit number, indicating a student
//       console.log(Student ID: ${studentID});
//     } else if (mentorName) {
//       // Email format with name, indicating a mentor
//       console.log(Mentor Name: ${mentorName});
//     }
//   } else {
//     console.log("Invalid email format.");
//   }
// }
