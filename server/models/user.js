import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  mobileNo: {
    type: String,
  },
  domain: {
    type: [String],
  },
  gender: {
    type: String,
  },
  isMentor: {
    type: Number,
    default: 0,
  },
  isVerified: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("User", userSchema);
