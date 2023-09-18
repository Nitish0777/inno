import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import db from "./config/db.js";

//configuring dotenv
dotenv.config();

//importing db
db();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`.white.underline.bold);
});
