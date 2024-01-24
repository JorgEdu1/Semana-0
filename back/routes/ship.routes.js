import express from 'express';
import { ShipController } from '../controller/ShipController.js';//importando o controller do frete
const router = express.Router();//criando o router

//route for email

router.post('/', ShipController.calculateShip);//rota para calcular frete

export default router;