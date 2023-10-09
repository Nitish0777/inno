import User from "../models/user.js";

const isDigit = async (number) => {
  return !isNaN(parseInt(number, 10));
  // return /\d/.test(number);
};

const addMentorOrStudentWithHelpOfEmail = async (email) => {
  console.log("email", email);
  const tempEmail = email;
  const number = tempEmail.split("@")[0];
  console.log("number", number);
  console.log("number", isDigit(number));
  return isDigit(number);
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
