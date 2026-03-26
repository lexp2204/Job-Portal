import express from "express";
import { createJob, getJobs, getJobById } from "../controllers/job.controller.js";
import {protect} from "../middleware/auth.middleware.js"

const router= express.Router();

//public
router.get("/", getJobs);
router.get("/:id", getJobs);

//protected
router.post("/", protect, createJob);

export default router;