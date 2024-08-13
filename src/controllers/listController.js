import { sendResponse, sendErrorResponse } from '../../config/response.js';
import listService from '../services/listService.js';

export async function getTravelList(req, res) {
    try {
        const answers = req.body;
        const recommendations = await listService.getTravelRecommendations(answers);
        sendResponse(res, recommendations);
    } catch (error) {
        sendErrorResponse(res, error);
    }
}
