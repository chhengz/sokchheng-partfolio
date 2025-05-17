import express from 'express';
import * as authController  from '../controllers/auth.controller.js';



const router = express.Router();


router.post("/login", authController.loginUser);
router.post("/register", authController.registerUser);

// router.get("/users", authController.getUsers);

export default router;
