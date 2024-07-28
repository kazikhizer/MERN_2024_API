import { compareSync } from 'bcrypt';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRoute.js';
import blogRouter from './routes/blogRoute.js';
import dotenv from 'dotenv';
const app = express();
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}));

dotenv.config({
    path:"./data/config.env"
})
mongoose.connect(process.env.MONGO_URL, {
    dbName: "MERN_2024_youtube"
}).then(console.log("mongoDb is connected"))

app.use(express.json());

///user routers 
app.use("/api/users",userRouter)


//blog router 
app.use("/api/blog",blogRouter)

app.listen(process.env.PORT,()=>{
    console.log('server started at port 4000');
})
