import { sendResponse, sendErrorResponse } from '../../config/response.js';
import shareService from '../services/shareService.js';
import path from 'path';

export async function getImageURL(req, res) {
    try {
        const file = req.file; // multer가 처리한 파일 정보

        if (!file) {
            return sendErrorResponse(res, 'No file uploaded');
        }

        const imagePath = file.path; // 임시 파일 경로
        const shareImageURL = await shareService.uploadImage(imagePath);

        console.log("Uploaded Image URL:", shareImageURL);
        sendResponse(res, { imageUrl: shareImageURL });
    } catch (error) {
        console.error(error);
        sendErrorResponse(res, 'Failed to upload image');
    }
}
