import dotenv from "dotenv";
dotenv.config();

import express from "express";
 
import connectDB from "./src/config/db.js"; 
const app = express();

 

app.use(express.json());

 
 

app.get("/", (req, res) => {
  console.log("Server is Working");
});

 

const port = process.env.Port || 5000;
app.listen(port, () => {
  console.log("Server started at Port : ", port);
  connectDB();
});
