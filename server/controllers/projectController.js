import exp from "constants";
import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const uploadProject = async (req, res) => {
  try {
    const { title, description, user_id, techStack, status } = req.body;
    let { originalname } = req.file;
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error in uploading projects",
      error: error.message,
    });
  }
};

export { uploadProject };
