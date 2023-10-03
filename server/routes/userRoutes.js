import express from "express";
import {
  registerUser,
  loginUser,
  getUserInfo,
} from "../controllers/userController.js";
import { getProj, uploadProj } from "../controllers/productController.js";

const router = express.Router();

//Sign-up User as well as Mentor
router.post("/register", registerUser);
router.post("/login", loginUser);

//getting the data of the user
router.get("/users/:id", getUserInfo);

router.post("/upload", uploadProj);
router.get("getProj", getProj);

export default router;
