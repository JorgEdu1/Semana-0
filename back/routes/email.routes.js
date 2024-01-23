import express from 'express';
import { EmailController } from '../controller/EmailController.js';
const router = express.Router();

//route for email

router.post('/', EmailController.sendEmail);

export default router;