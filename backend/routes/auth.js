// Signup & Login with password hashing and JWT token
const express = require('express');
const router = express.Router();

//Importing the registerUser function and loginUser function
const {registerUser}=require("../controllers/authController")
const {loginUser}= require("../controllers/authController")

//Route to register a user
router.post("/register", registerUser)

//Route to login a user
router.post("/login", loginUser)


module.exports = router;