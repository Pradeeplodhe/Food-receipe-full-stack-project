import express from "express";
import fs from "fs";
import cors from "cors";

// const app = express();
const routes=express.Router();


const filePath = "./1.json";
 routes.get("/",(req,res)=>{
  res.send("hello")
 })
routes.get("/api/dises", (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data);
});

// POST API
routes.post("/api/dises", (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  data.push(req.body); // नया data add करो
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json({ message: "Data saved!", newData: req.body });
});

export default routes ;

