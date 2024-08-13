// src/server.js
import express from 'express';
import chatService from './services/chatService.js';

const app = express();
const PORT = process.env.PORT || 3000;

// 기본적으로 JSON 요청 본문을 파싱
app.use(express.json());

// 추천 여행지 리스트를 조회하는 GET API 엔드포인트
app.get('/api/travel-recommendations', async (req, res) => {
    try {
        // 필요한 답변 데이터(프론트엔드에서 보내준 데이터를 사용)
        const answers = req.query;

        // chatService를 사용해 추천 여행지 리스트를 가져옴
        const recommendations = await chatService.getTravelRecommendations(answers);

        // 추천 리스트를 JSON 형식으로 응답
        res.json(recommendations);
    } catch (error) {
        console.error('Error fetching travel recommendations:', error.message);
        res.status(500).json({ error: 'Failed to fetch travel recommendations' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


//export default new listService();