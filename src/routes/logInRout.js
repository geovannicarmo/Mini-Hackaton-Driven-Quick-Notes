import { Router } from 'express';
import { logIncontrollers } from '../controllers/logInControllers.js';

const router = Router()

router.post('/login', logIncontrollers)

export default router