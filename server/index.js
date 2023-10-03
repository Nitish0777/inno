import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import db from "./config/db.js";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";

//configuring dotenv
dotenv.config();

//importing db
db();

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

//api for fecting data
app.use("/api/users", userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`.white.underline.bold);
});
