import express from "express";
import multer from "multer";
import { uploadProject } from "../controllers/projectController.js";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/uploadproject", upload.single("file"), uploadProject);

export default router;
