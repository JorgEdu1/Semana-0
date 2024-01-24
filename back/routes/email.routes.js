import express from 'express';
import { EmailController } from '../controller/EmailController.js';//importando o controller do email
const router = express.Router();//criando o router

//route for email

router.post('/', EmailController.sendEmail);//rota para enviar email

export default router;