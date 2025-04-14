// const express = require("express");
// const dotenv = require("dotenv");
import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors';
// const cors = require('cors');




import { connectDB, sequelize } from './config/db.js';
// const authRoutes = require("./routes/authRoutes");
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

// Apply CORS *before* routes
app.use(cors({ origin: 'http://localhost:5500', credentials: true }));

// Parse incoming JSON
app.use(express.json());

// Now mount routes
app.use("/api/v1", authRoutes);


// Sync DB and Start Server
const PORT = process.env.PORT || 5500;

connectDB().then(() => {
  sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`--> Server running on port ${PORT}`));
  });
});
