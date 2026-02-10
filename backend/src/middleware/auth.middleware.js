import { response } from "express";
import jwt from "jsonwebtoken";

export const protect=(request, response, next) =>{
    const authHeader= request.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer")){
        return response.status(401).json({message:"No token"});
    }

    const token = authHeader.split(" ")[1];

    try{
        const decoded= jwt.verify(token, process.env.JWT_SECRET);
        request.user= decoded;
        next();
    }catch(err){
        response.status(401).json({message: "Invalid token"});
    }
};