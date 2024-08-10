import express from 'express';
import { getRecommendations } from '../controllers/chatController.js';

const router = express.Router();

router.post('/chat', getRecommendations);

export default router;
