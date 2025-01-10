import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors";

 const app=express();
 app.get("/",(req,res)=>{
    res.send('<h1>Hello Faizan</h1>')
 })
 app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
 }))

 app.use(express.json({
    limit:"16kb"
 }))
 app.use(express.urlencoded({
    extended:true,
    limit:"16kb",
 }))

 app.use(express.static("public"))
 app.use(cookieParser())

 export {app}


