import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { DBconnect, sequelize } from './config/db.js';
import routes from './routes/routes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: process.env.CORE_ORIGIN, credentials: true }));
app.use(express.json());

// Routes
app.use(routes);

const PORT = process.env.PORT;

DBconnect().then(() => {
  sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`--> 🔥 Server running on port https://localhost:${PORT}`));
  });
});
