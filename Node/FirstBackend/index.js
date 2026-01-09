 import dotenv from 'dotenv'
dotenv.config()

import express, { response } from 'express'

import connectDB from './src/config/db.js';
import AuthRouter from "./src/routers/myRouter.js"

const app = express();

app.use(express.json());


app.use("/auth",AuthRouter);

app.get("/",(req,res)=>{
    console.log("server is running");
    res.json({message: "server is running Seccessfully"});
    
});

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("Server start at port", port);
    connectDB();
});


