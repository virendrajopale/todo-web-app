// import express from 'express'
const cookie_parser =require('cookie-parser')
const toDoRouter =require('./Routes/TodoRoute');
const connectDb =require( './config/database');
const cors =require( 'cors')
const path=require('path')
const express=require('express')
const app= express();

if(process.env.NODE_ENV!=="PRODUCTION"){
  require('dotenv').config({path:"backend/config/config.env"})
}
connectDb()
app.use(express.json());
app.use(cookie_parser())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('/todo',toDoRouter);


app.use(express.static(path.join(__dirname,"../frontend/build")))
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
})

  app.listen(process.env.PORT,() => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);

  });
