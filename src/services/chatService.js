// src/services/TravelService.js
import chatProvider from '../providers/chatProvider.js';
import { parseTravelRecommendations, parseTravelRoute } from '../utils/parser.js';

class chatService {
    async getTravelRecommendations(answers) {
        const prompt = `
            
            일정 정보: ${answers.schedule} 
            상세 인원 정보: ${answers.groupComposition} 
            여행의 목적: ${answers.purpose}
            여행 예산: ${answers.budget}
            여행 중 가장 중요하게 생각하는 요소: ${answers.keyElement}
            선호하는 숙박 시설: ${answers.accommodation}
            선호하는 이동 수단: ${answers.transport}
            동행자: ${answers.companion}
            특히 마음에 들었던 여행지: ${answers.favorite}
            마음에 들었던 이유: ${answers.favoriteReason}
            필요하거나 피하고 싶은 요소: ${answers.specialNeeds}
            AI 추천 방식: ${answers.recommendationType}
            여행 중 어느 정도의 자유 시간을 원하시나요? : ${answers.freeTime}
            위 답변 중 가장 중요시 생각하는 단어 : ${answers.importantFactors}

            위 정보를 바탕으로, 무조건 어떤 부가적인 말 없이 다음과 같은 형식으로 국내 여행지 7곳을 추천해줘.
            1. [지역명] - [지역구]: 특징 1, 특징 2, 특징 3
            2. [지역명] - [지역구]: 특징 1, 특징 2, 특징 3
            3. [지역명] - [지역구]: 특징 1, 특징 2, 특징 3
            4. [지역명] - [지역구]: 특징 1, 특징 2, 특징 3
            5. [지역명] - [지역구]: 특징 1, 특징 2, 특징 3
            6. [지역명] - [지역구]: 특징 1, 특징 2, 특징 3
            7. [지역명] - [지역구]: 특징 1, 특징 2, 특징 3
        `;

        const response = await chatProvider.getChatGPTResponse(prompt);
        // Log the raw response
        console.log(response);

        // Parse the response and log the parsed result
        const recommendations = parseTravelRecommendations(response);
        console.log('Parsed travel recommendations:', recommendations);

        return recommendations;
    }
    async getDetailedTravelInfo(destinations) {
        const prompt = `
       
        여행 계획: ${destinations.region} - ${destinations.city}
        특징: ${destinations.points[0]}, ${destinations.points[1]}, ${destinations.points[2]}
        

        위에서 언급된 각 여행지에 대해 여행 루트를 작성합니다. 부가적인 말 없이 다음 정보를 다음과 같이 제공해 주세요:
        [일차]
        - 장소명
        - 영업 시간
        - 주변에 더 방문할 만한 추천 명소
        - 주변 인기 있는 메뉴
        - 특별한 방문 팁
    `;

        try {
            const response = await chatProvider.getChatGPTResponse(prompt);
            const route = parseTravelRoute(response);
            // return response;
            return route;
        } catch (error) {
            console.error('Detailed travel info error:', error.message);
            throw error;
        }
    }
}


export default new chatService();
