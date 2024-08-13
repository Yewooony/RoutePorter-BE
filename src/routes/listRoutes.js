import express from 'express';
import { getRecommendations } from '../controllers/chatController.js';

const router = express.Router();

router.get('/list', getRecommendations);

export default router;

//쓰고 보니 chatRoutes랑 겹치는거같은데 머지?? not Merge...