import express from 'express';
import { login, logout, register } from '../controllers/auth.js';


const router = express.Router()

router.post("/authregister", register)
router.post("/register", login)
router.post("/register", logout)



export default router