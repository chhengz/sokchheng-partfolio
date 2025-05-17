import express from 'express';
import * as projectController from '../controllers/project.controller.js';

const router = express.Router();

// Define routes for project operations
router.get('/', projectController.getAllProjects); // Get all projects
router.get('/:id', projectController.getProjectById); // Get a project by ID
router.post('/new', projectController.createProject); // Create a new project
router.put('/:id', projectController.updateProject); // Update a project by ID


export default router;