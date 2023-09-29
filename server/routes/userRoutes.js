import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import { getProj, uploadProj } from "../controllers/productController.js";

const router = express.Router();

console.log("Router loaded");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/upload", uploadProj);

router.get("getProj", getProj);

export default router;
