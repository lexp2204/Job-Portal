const pool= require("../db")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//registerUser functiion
exports.registerUser= async (req, res)=>{
    const {name, email, password}= req.body;
    try{
        const hashedPassword= await bcrypt.hash(password, 10)
        const result=await pool.query(
            "INSERT INTO users (name, email, password) VALUES ($1,$2,$3) RETURNING *",
            [name, email, hashedPassword]
        );
        res.status(201).json(result.rows[0]);
    }catch(err){
        res.status(500).json({error: err.message });
    }
};


//loginUser function
exports.loginUser= async (req, res)=>{
    const{email, password}=req.body;
    try{
        const result= await pool.query("SELECT * FROM users WHERE email=$1", [email]);
        const user= result.rows[0];

        if(!user) return res.status(400).json({message: "User not found"});

        const match= await bcrypt.compare(password, user.password);
        if(!match) return res.status(400).json({message: 'Invalid credentials'});

        const token =jwt.sign({id: user.id}, process.env.JWT_SECRET,{expiresIn: '1d'});
        res.json({token});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};



