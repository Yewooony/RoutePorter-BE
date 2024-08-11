import express from 'express';
import {getDetailedRoute} from "../controllers/chatController.js";

const router = express.Router();

router.post('/', getDetailedRoute);

export default router;
