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
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  domain: {
    type: [String],
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  isMentor: {
    type: Number,
    required: true,
  },
  isVerified: {
    type: Number,
    default: 0,
  },
});
