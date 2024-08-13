import express from 'express';
import { getTravelList } from '../controllers/listController.js';

const router = express.Router();

router.post('/list', getTravelList);

export default router;
