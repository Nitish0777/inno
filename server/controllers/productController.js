import exp from "constants";
import express from "express";
import multer from "multer";
import path from "path";

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// API endpoint for uploading a project
const uploadProj = async (req, res) => {
  try {
    const { title, description } = req.body;
    const file = req.file.filename;

    const project = new Project({ title, description, file });
    await project.save();

    res.json({ success: true, message: "Project uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// API endpoint for retrieving projects
const getProj = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ success: true, projects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { getProj, uploadProj };
