const dotEnv = require("dotenv");
dotEnv.config();
const express = require("express");
const { apirouter } = require("./api/v1/routes");
const app=express();
app.use(express.json());
app.use((req,res,next)=>{
  console.log("-------");
  console.log(new Date(),req.method,req.url);
 // console.log(req.method);
  console.log("-------");
  next();
})
app.get("/",(req,res)=>{
  res.json({
    isSuccess:true,
    message:"Server is running",
    data:{},
  });
})
app.get("/hello",(req,res)=>{
  res.json({
    isSuccess:true,
    message:"Server is running",
    data:{},
  });
})
app.use((req,res,next)=>{
  console.log("!!!!!!!");
  next();
});
app.use("/api/v1",apiRouter)
app.listen(2900,()=>{
  console.log("----Server is running-----");
});