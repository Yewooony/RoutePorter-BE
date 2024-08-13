import express from 'express';
import { getRecommendations } from '../controllers/chatController.js';

const router = express.Router();

router.get('/list', getRecommendations);

export default router;
