import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger/swagger-output.json' assert { type: 'json' };

import dotenv from 'dotenv';
import route from './src/routes/route.js';
import chatRoutes from './src/routes/chatRoutes.js'; // .js 확장자 주의




dotenv.config();

const app = express();
const port = 3000;

// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// 라우터 설정
app.use('/routes', route);
app.use(chatRoutes);

// Swagger 문서 설정
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile))


// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


