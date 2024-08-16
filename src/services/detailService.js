import { OpenAI } from "openai";
import dotenv from "dotenv";
import DetailDTO from "../dtos/detailDto.js";

dotenv.config();

class GptService {
  /**
   *
   * @param {DetailDTO} detailDTO
   */
  static async callChatGPT(detailDTO) {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const prompt = `
        여행지역: ${detailDTO.region} ${detailDTO.district}
        이번 여행의 주요 키워드: [${detailDTO.features.join(', ')}]

        위 정보를 바탕으로 여행지에서 이용하기 좋은 교통수단과 교통수단 사이트를 목록 5개 알려줘,
        추가로 이용하기 좋은 숙박시설설명과 숙박시설 사이트들 목록 5개 알려줘,
        또 먹기 좋은 유명음식 5개와 각 음식마다 가게를 5개씩 알려줘
    `;

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content:
              `당신은 사용자 선호도에 따라 여행 추천을 제공하는 유용한 조수입니다. 
              교통수단, 숙박시설, 유명음식의 대분류를 기준으로 추천을 해주면서 각 대분류 별 상단에 추천하는 이유에 대한 기본적인 설명을 3줄 이내로 하고 
              하단에는 관련 사이트 목록을 요소 설명 없이 요구하는 목록 개수만큼 나열만 해주세요.
              상단과 하단은 구분점으로 [목록]을 추가해주세요
              유명음식은 설명없이 상하단 구분하지 말고 목록만 나열해주세요
              주는 정보에 교통수단, 숙박시설, 유명음식 각각에 대한 대분류를 구분 할 수 있는 구분점으로 각 대분류 사이에 &===를 하나씩만 추가해주세요`,
          },
          { role: "user", content: prompt},
        ],
        max_tokens: 4096, // max_tokens를 messages 배열 바깥으로 이동
      });

      const splitData = response.choices[0].message.content.split("&===").filter((v) => v.length > 0);

      const answer = {
        traffic: splitData[0],
        hotel: splitData[1],
        food: splitData[2] 
      };
      return answer;
    } catch (error) {
      console.error(
        "ChatGPT 요청 중 오류:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  }
}

export default GptService;