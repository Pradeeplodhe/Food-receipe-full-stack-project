import express from "express";
import mongoose from "mongoose"
import User from "../config/db.js";
import UserModel from "../model/login.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const loginRoutes = express.Router();



loginRoutes.get("/", (req, res) => {

  res.send("Login API working fine");
});

loginRoutes.post("/login", async (req, res) => {
  const {email,password}=req.body;
 console.log({email,password},"backend")
  try {
    const notes = await UserModel.find({email});
    console.log(notes)
    // res.send({ msg: notes });
 
      if (notes.length > 0) {


     const isMatch = await bcrypt.compare(password,notes[0].password);
    if (isMatch){ 
     const token = jwt.sign({password }, "coding ", { expiresIn: "12h" });
    
    return res.send({  msg: `ILogin  successful` ,
         token:{token},
    })
    
    }

   else res.send({  msg: `invalidpass word` });
  
      // Load hash from your password DB.
      // bcrypt.compare(password, user[0].password, (err, result) => {
        // result == true
        //   const passswordvalidate = await UserModel.find({password});
        // if (passswordvalidate.length>0) {
        // //     // const token = jwt.sign({ user: user }, 'coding');
        //   res.send({ msg: "Login Successfully,token" });
        // } else {
        //   res.send({ msg: "Wrong Credientials" });
        // }
    //     res.send({msg:"loginsuccfully"})
    //     alert("login syccefully")
    //     console/log("hiii")
    //   // });
    // }else{
    //   res.send({ msg: "Wrong Credientials" })
    // }
  
  }else {
      res.send({ msg: "Invalid Email Address" });
    }

  


  } catch (error) {
    res.send({ msg: "Unable to read notes" });
  }
});

loginRoutes.post("/register", async(req, res) => {
  
  const {email,password}=req.body;
    try{


 const saltRounds = 10;   // 10–12 is common
    const hashedPassword = await bcrypt.hash(password, saltRounds);


    const notes = await UserModel({email,password:hashedPassword});
    notes.save();
    res.send({e:"user ragister succeffull xKH"})
    
  }
    catch(e){
     res.send({e:"unable to resgister"})
    }
});


export default loginRoutes ;
