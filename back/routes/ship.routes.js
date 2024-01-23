import express from 'express';
import { ShipController } from '../controller/ShipController.js';
const router = express.Router();

//route for email

router.post('/', ShipController.calculateShip);

export default router;