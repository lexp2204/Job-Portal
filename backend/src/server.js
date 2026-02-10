import express, { request, response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (request, response)=>{
    response.send("API running...");
});

const PORT=process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));