import mongoose from "mongoose";
import { DB_NAME } from "../src/constant.js";

const connectDB= async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`MONGODB connected successfully in index.js  :${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB connection Error in index.js",error);
        process.exit(1);
    }
}

export default connectDB;