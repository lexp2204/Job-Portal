//Server Setup
const express = require('express');
const cors= require('cors');
require('dotenv').config();

const app =express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/jobs', require('./routes/jobs'));

app.listen(3000, () => console.log('Server started on port 3000'));