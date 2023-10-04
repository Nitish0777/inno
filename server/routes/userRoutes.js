import express from "express";
import {
  registerUser,
  loginUser,
  getUserInfo,
  updateUserInfo,
  updateUserImg,
} from "../controllers/userController.js";

const router = express.Router();

//Sign-up User as well as Mentor
router.post("/register", registerUser);
router.post("/login", loginUser);

//getting the data of the user
router.get("/users/:id", getUserInfo);

//updating the data of the user
router.get("/userupdate/:id", updateUserInfo);

//updating image of the user
router.get("/userimage/:id", updateUserImg);

export default router;
