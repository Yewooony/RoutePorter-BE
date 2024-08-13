require('dotenv').config();
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o", // 올바른 모델 이름을 설정하세요
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "국내 여행하기 좋은 지역 1개만 알려줘" }
      ],
      max_tokens: 100 // 응답의 최대 토큰 수 설정
    });



    if (response && response.choices && response.choices.length > 0) {
      const messageContent = response.choices[0].message.content; // 'message'가 객체임을 확인하세요
      console.log('Message Content:', messageContent);
    } else {
      console.error('Unexpected response structure:', response);
    }
  } catch (error) {
    if (error.response) {
      // 오류에 대한 상세 정보를 로그에 출력합니다
      console.error('Error status:', error.response.status);
      console.error('Error data:', error.response.data);
    } else {
      console.error('Error message:', error.message);
    }
  }
}

main();