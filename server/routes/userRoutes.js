import express from "express";
import { registerUser } from "../controllers/userController.js";

const router = express.Router();

console.log("Router loaded");

router.post("/register", registerUser);

export default router;
