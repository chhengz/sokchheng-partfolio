import express from 'express';
import authRoutes from './auth.routes.js';
import projectRoutes from './project.routes.js';

const router = express.Router();
const baseURL = '/api/v1';

// Mount auth routes
router.use(`${baseURL}/auth`, authRoutes);
router.use(`${baseURL}/projects`, projectRoutes);







export default router;