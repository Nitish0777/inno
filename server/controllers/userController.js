import User from "../models/user.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import jwt from "jsonwebtoken";
import randomstring from "randomstring";

// register controller --------------- 1---------------- http://localhost:8000/api/users/register -------- Working
const registerUser = async (req, res) => {
  try {
    const { college, name, email, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "User already exists",
      });
    }
    const user = new User({ college, name, email, password: hashedPassword });
    await user.save();

    // Send a success response to the client
    return res.status(201).send({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// login controller --------------- 2---------------- http://localhost:8000/api/users/login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please provide email and password",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "Invalid Credentials",
      });
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).send({
        success: false,
        message: "Incorrect Password",
      });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return res.status(200).send({
      success: true,
      message: "User logged in successfully",
      token,
      user: {
        name: user.name,
        email: user.email,
        college: user.college,
        _id: user._id,
      },
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error in logging in user",
      error: error.message,
    });
  }
};

// get user info controller --------------- 3---------------- http://localhost:8000/api/users/users/:id
const getUserInfo = async (req, res) => {
  try {
    const user_id = req.params.id;
    const userData = await User.findOne({ _id: user_id });
    if (!userData) {
      return res.status(404).send({
        success: false,
        message: "Error in getting or finding User",
        error,
      });
    }
    return res.status(200).send({
      success: true,
      message: "User get Sucessfully",
      userData,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error in getting User from db",
      error: error.message,
    });
  }
};

const updateUserInfo = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      college,
      course,
      passYear,
      sem_year,
      location,
      instagram,
      linkdin,
      website,
      github,
      technology,
      programming,
      image,
      bio,
    } = req.body;

    const user = await User.findById({ _id: req.params.id });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    if (password && password.length < 6) {
      return res.status(400).send({
        success: false,
        message: "Password must be atleast 6 characters long",
      });
    }
    const hashedPassword = password ? await hashPassword(password) : undefined;
    const updateUser = User.findByIdAndUpdate(
      req.user._id,
      {
        name: name || user.name,
        email: email || user.email,
        password: hashedPassword || user.password,
        college: college || user.college,
        course: course || user.course,
        passYear: passYear || user.passYear,
        sem_year: sem_year || user.sem_year,
        location: location || user.location,
        instagram: instagram || user.instagram,
        linkdin: linkdin || user.linkdin,
        website: website || user.website,
        github: github || user.github,
        technology: technology || user.technology,
        programming: programming || user.programming,
        image: image || user.image,
        bio: bio || user.bio,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "User updated successfully",
      updateUser,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error in updating User into db",
      error: error.message,
    });
  }
};

//I have to work on this, check this api`
const updateUserImg = async (req, res) => {
  try {
    const { image } = req.body;
    const user = await User.findById({ _id: req.params.id });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    const updateUser = User.findByIdAndUpdate(
      req.user._id,
      {
        image: image || user.image,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "User Image updated successfully",
      updateUser,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error in updating User Image into db",
      error: error.message,
    });
  }
};

export { registerUser, loginUser, getUserInfo, updateUserInfo, updateUserImg };
