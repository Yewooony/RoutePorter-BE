import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function callChatGPT(answers) {
    const prompt = `
        이번 여행의 주된 목적: ${answers.purpose}
        여행 기간: ${answers.duration}
        여행 예산: ${answers.budget}
        선호하는 기후: ${answers.climate}
        관심 있는 활동: ${answers.activities}
        선호하는 이동 수단: ${answers.transport}
        동행자: ${answers.companion}
        특히 마음에 들었던 여행지: ${answers.favorite}
        여행 중 필요하거나 피하고 싶은 요소: ${answers.specialNeeds}
        선호하는 문화권이나 나라: ${answers.preferredCountries}
        AI 추천 방식: ${answers.recommendationType}

        위 정보를 바탕으로 최적의 여행지와 루트를 추천해 주세요.
    `;

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [
                { role: 'system', content: 'You are a helpful assistant who provides travel recommendations based on user preferences.' },
                { role: 'user', content: prompt }
            ],
            max_tokens: 100, // max_tokens를 messages 배열 바깥으로 이동
        });

        const answer = response.choices[0].message.content;
        return answer;
    } catch (error) {
        console.error('ChatGPT 요청 중 오류:', error.response ? error.response.data : error.message);
        throw error;
    }
}