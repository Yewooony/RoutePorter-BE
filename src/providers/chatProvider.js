import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

class chatProvider {
    constructor() {
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
    }

    async getChatGPTResponse(prompt) {
        try {
            const response = await this.openai.chat.completions.create({
                model: 'gpt-4o',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant who provides travel recommendations based on user preferences.' },
                    { role: 'user', content: prompt }
                ],
            });

            return response.choices[0].message.content;
        } catch (error) {
            console.error('ChatGPT 요청 중 오류:', error.response ? error.response.data : error.message);
            throw error;
        }
    }
}

export default new chatProvider();
