// server.js
require('dotenv').config();

const connectDB = require('./utils/connectDB');

// Run DB connection
connectDB();

// You can test individual functions here:
const createOne = require('./controllers/createOne');
createOne();


