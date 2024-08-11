import {handleError} from "./error.js";

export function sendResponse(res, data, status = 200) {
    res.status(status).json({
        success: true,
        data
    });
}

export function sendErrorResponse(res, error) {
    const { message, status } = handleError(error);
    res.status(status).json({
        success: false,
        message
    });
}
