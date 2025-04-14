// const express = require("express");
import express from 'express';
// const { loginUser } = require("../controllers/authController");
import * as authController  from '../controllers/authController.js';



const router = express.Router();


router.post("/login", authController.loginUser);
router.post("/register", authController.registerUser);

// router.get("/users", authController.getUsers);

export default router;
