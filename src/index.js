import dotenv from "dotenv";
import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constant.js";
import connectDB from "../db/index.js";


dotenv.config({path:"../.env"});
connectDB()
.then(()=>{
    application.on("error",(err)=>{
                    console.log("Index.js file  erroe on App.listen : ERROR :",err);
                    throw err;
    })
    application.listen(process.env.PORT || 8000 ,()=>{
        console.log(`Server is running on port: ${process.env.PORT || 8000}`);
    })
    console.log("DB connected successfully");
})
.catch((err)=>{
    console.log("MONGODB Connection  fail - ERROR:",err);
    throw err;
})









// import express from "express";
// const application = express();


// ;(async()=>{

//     try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         application.on("error",(err)=>{
//             console.log("ERROR:",err);
//             throw err;
//         })
//         application.listen(process.env.PORT,()=>{
//             console.log("Server is running on port:",process.env.PORT);
//         })
//     }
//     catch(err){
//         console.log("ERROR:",err);
//         throw err;
//     }
// })()