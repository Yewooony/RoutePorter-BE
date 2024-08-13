import DetailDTO from "../dtos/detail.dto.js";
import GptService from "../services/gpt.service.js";
import TourService from "../services/tour.service.js";

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export async function getDetail(req, res) {
  const detailDTO = new DetailDTO(req.body);

  try {
    const gptRes = await GptService.callChatGPT(detailDTO);
    const tourRes = await TourService.callTourApi(detailDTO);

    const result = {
      gptComment: gptRes,
      tourData: tourRes
    };

    return res.json(result);
  } catch (error) {
    res.json({
      error: "Failed to get response",
    });
  }
}