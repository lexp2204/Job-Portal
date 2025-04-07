import axios from 'axios';
const API= axios.create({baseURL: 'http://localhost:3000/api'});

export const signup = (userdata)=>API.post('/auth/register', userdata);
export const login = (userData) => API.post('/auth/login', userData);

export const fetchJobs = () => API.get('/jobs');
export const postJob = (jobData) => API.post('/jobs', jobData);