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

export async function getDetailedRoute(req, res) {
    try {
        const { destination1, destination2, point1, point2, point3 } = req.body;
        if (!destination1 || !destination2 || !point1 || !point2 || !point3) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const route = await chatService.getDetailedTravelInfo({ destination1, destination2, point1, point2, point3 });
        sendResponse(res, route);
    } catch (error) {
        sendErrorResponse(res, error);
    }
}
