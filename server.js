const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const usersModel = require("./model/usersModel");
const adminsModel = require("./model/adminsModel");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/userdb")
.then(()=>console.log("db is connected"))
.catch((err)=>console.log(err));

app.get("/" , (req, res)=>{
    res.send("My App is running");
});

app.get("/showusers" , async (req,res)=>{
    const result = await usersModel.find({});
    res.json(result);
});

app.post("/addusers",(req,res)=>{
    const result = new usersModel(req.body);
    result.save();
    res.json("user added successfully....");
});

app.post("/admins", (req, res)=>{
    const result = new adminsModel(req.body);
    result.save();
    res.json(result);
});

app.listen(4030, ()=>{
    console.log("API is running on Port number 4030 ...");
});