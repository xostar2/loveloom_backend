import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const application = express();

application.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

application.use(express.json({
    limit: "50mb", 
}));

application.use(express.urlencoded({
    extended: true
}));

application.use(express.static("public"));

application.use(cookieParser());

export default application;