import dotenv from 'dotenv';
dotenv.config({ path: './.env' }); // Relative to working directory

// console.log("Mongo URI from .env:", process.env);

import express from 'express';
import cors from 'cors';



import connectDB from './config/db.js';

import studentRoutes from './routes/studentRoutes.js';
import facultyRoutes from './routes/facultyRoutes.js';



const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Database connection
connectDB();

// app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/faculty', facultyRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!' });
});



// Start the Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));