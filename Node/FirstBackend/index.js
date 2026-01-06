 import dotenv from 'dotenv'
dotenv.config()

import express, { response } from 'express'

const app = express();

app.get("/",(req,res)=>{
    console.log("server is running");
    res.json({message: "server is running"});
    
})

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("Server start at port", port);
    
});


