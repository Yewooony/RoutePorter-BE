import express from 'express';
import { getTravelRouteHandler } from '../controllers/routeController.js';

const router = express.Router();

router.post('/routes', getTravelRouteHandler);

export default router;
