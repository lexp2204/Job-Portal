// Routes to post and fetch job listings
const express = require('express');
const router = express.Router();

const {createJob}= require("../controllers/jobController")
const {getAllJobs}= require("../controllers/jobController")
const {getJobById}= require("../controllers/jobController")
const {updateJob}= require("../controllers/jobController")
const {deleteJob}= require("../controllers/jobController")
//Route to create a Job 
router.post("/", createJob)

//Route to retrieve All Jobs
router.get("/", getAllJobs)

//Route to retrieve one Job by id
router.get("/:id", getJobById)

//Route to update Job
router.put("/:id", updateJob)

//Route to delete a Job
router.delete("/:id", deleteJob)

module.exports = router;
