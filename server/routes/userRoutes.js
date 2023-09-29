import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

console.log("Router loaded");

router.post("/register", registerUser);

router.post("/login", loginUser);

export default router;
