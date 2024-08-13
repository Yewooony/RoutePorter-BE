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
        const { destinations } = req.body;

        if (!destinations || !Array.isArray(destinations) || destinations.length === 0) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Example of accessing properties safely
        const destination = destinations[0];
        if (!destination || !destination.points || !Array.isArray(destination.points)) {
            return res.status(400).json({ message: 'Invalid destination data' });
        }

        const route = await chatService.getDetailedTravelInfo(destination);
        sendResponse(res, route);
    } catch (error) {
        sendErrorResponse(res, error);
    }
}
