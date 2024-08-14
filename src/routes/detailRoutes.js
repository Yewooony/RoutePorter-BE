import express from 'express';
import { getDetail } from '../controllers/detailController.js'
const router = express.Router();

router.get('/detail', getDetail);

export default router;