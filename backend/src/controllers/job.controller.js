import prisma from "../prisma.js";

//Create Job function (Employer Only)
export const createJob=async (request,response) => {
    try{
        const {title, description, location, salary, company}= request.body;

        if(request.user.role !== "EMPLOYER"){
            return response.status(403).json({message:"Access denied"});
        }

        const job= await prisma.job.create({
            data:{
                title,
                description,
                location,
                salary,
                company,
                employerId: request.user.userId
            },
        });

        response.status(201).json(job);
    }catch(err){
        response.status(500).json({error: err.message});
    }
};


//Get all jobs (public)
export const getJobs=async (request,response) => {
    try{
        const jobs= await prisma.job.findMany({
            include: {
                employer:{
                    select: {
                        name: true,
                        email: true,
                    },
                },
            },
            orderBy: {createdAt: "desc"},
        });

        response.json(jobs);
    }catch(err){
        response.status(500).json({error: err.message});
    }    
};


//Get a single job
export const getJobById= async (request,response) => {
    try{
        const {id}= request.params;

        const job=await prisma.job.findUnique({
            where: {id: Number(id)},
            include:{
                employer: {
                    select: {
                        name: true,
                        email: true,
                    },
                },
            },
        });

        if(!job) return response.status(404).json({message: "Job not found"});

        response.json(job);
    }catch(err){
        response.status(500).json({error: err.message});
    }
};