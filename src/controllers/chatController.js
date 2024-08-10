import { sendResponse, sendErrorResponse } from '../../config/response.js';
import chatService from '../services/chatService.js';

export async function getRecommendations(req, res) {
    try {
        const answers = req.body;
        const recommendations = await chatService.getTravelRecommendations(answers);
        sendResponse(res, recommendations);
    } catch (error) {
        sendErrorResponse(res, error);
    }
}
