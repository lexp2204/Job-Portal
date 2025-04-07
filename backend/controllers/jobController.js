const pool= require("../db")

//createJob function
exports.createJob= async(req, res)=>{
    const {title, description, company, location, salary}= req.body;
    try{
        const result= await pool.query(
            'INSERT INTO jobs (title, description, company, location, salary) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [title,description,company,location,salary]
        );
        res.status(201).json(result.rows[0]);
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

//getAllJobs function
exports.getAllJobs= async(req, res)=>{
    try{
        const result = await pool.query(
        "SELECT * FROM jobs"
        );
        res.json(result.rows)
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

//getJobById function
exports.getJobById= async(req, res)=>{
    const jobId= req.params.id;
    try{
        const result = await pool.query('SELECT * FROM jobs WHERE id = $1', [jobId]);
        if(result.rows.length===0) return res.status(404).json({message:"Job not found"});
        res.json(result.rows[0]);
    }catch(err){
        res.status(500).json({error: err.message})
    }
};


//updateJob function
exports.updateJob = async (req, res) => {
    const jobId = req.params.id;
    const { title, description, company, location, salary } = req.body;
    try {
      const result = await pool.query(
        'UPDATE jobs SET title = $1, description = $2, company = $3, location = $4, salary = $5 WHERE id = $6 RETURNING *',
        [title, description, company, location, salary, jobId]
      );
      res.json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

//deleteJob function
exports.deleteJob = async (req, res) => {
    const jobId = req.params.id;
    try {
      await pool.query('DELETE FROM jobs WHERE id = $1', [jobId]);
      res.json({ message: 'Job deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
