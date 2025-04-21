import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchJobs } from "../services/api"; // Make sure this path is correct
import "../Dashboard.css"


function Dashboard() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      getJobs();
    }
  }, [navigate]);

  async function getJobs() {
    try {
      const response = await fetchJobs();
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>JobFinder Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="job-cards-container">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <p>{job.description}</p>

            <a
             href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className="view-job-btn"
            >
    View Job
  </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
