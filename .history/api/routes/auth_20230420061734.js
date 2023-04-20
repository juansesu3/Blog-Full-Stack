import express from 'express';
import { login, register } from '../controllers/auth';


const router = express.Router()

router.post("/register", register)
router.post("/register", login)
router.post("/register", log)



export default router