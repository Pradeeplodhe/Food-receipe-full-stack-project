import express from "express";
import fs from "fs";
import cors from "cors";
import  routes from "./api/api.routes.js"
import loginRoutes from "./login/login.routes.js";
import mongoose from "mongoose"
import connectDB from "./config/db.js";
// const loginRoutes = require("./login/login.routes.js"); // ✅ require
// const loginRoutes from  "./"
// import loginRoutes from "./login/login.routes.js"
const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hiiii");
})
app.use("/a",routes);
 


app.use("/info",loginRoutes);

app.listen(5000,  async() => {
    console.log("runnin d at port 5000")
    try{
   await connectDB();
   console.log("server is connected")
   
    }
    catch(e){
 console.log("not connetc ")
    }
});
