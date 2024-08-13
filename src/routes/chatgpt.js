import express from 'express';
import { getDetail } from '../controllers/chatgpt.js'
const router = express.Router();

router.get('/detail', getDetail);

export default router;