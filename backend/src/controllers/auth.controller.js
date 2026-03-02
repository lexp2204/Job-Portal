import prisma from "../prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


//register function
export const register = async (request, response) => {
    try{
        const {name, email, password}= request.body;

        //check if user exists
        const existingUser= await prisma.user.findUnique({
            where: {email},
        });

        if (existingUser){
            return response.status(400).json({message:"Email already in use"});
        }

        //hash password
        const hashedPassword= await bcrypt.hash(password,10);

        //create user
        const user= await prisma.user.create({
            data:{
                name,
                email,
                password: hashedPassword,
            },
        });

        response.status(201).json({message: "User created", user});
    } catch (err){
        response.status(500).json({ error: err.message});
    }
};


//login functon
export const login= async (request, response) =>{
    try{
        const {email, password} =request.body;

        const user=await prisma.user.findUnique({
            where: {email},
        });

        if(!user) {
            return response.status(400).json({message: "Invalid credentials"});
        }

        const isValid=await bcrypt.compare(password, user.password);

        if(!isValid){
            return response.status(400).json({message: "Invalid credentials"});
        }

        //create token
        const token= jwt.sign(
            {userId: user.id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        );

        response.json({token});
    } catch(err){
        response.status(500).json({error: err.message})
    }
}