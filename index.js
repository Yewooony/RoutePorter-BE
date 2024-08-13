import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger/swagger-output.json' assert { type: 'json' };
import { specs } from './config/swagger.config.js';
import dotenv from 'dotenv';
import route from './src/routes/route.js';
import chatRoutes from './src/routes/chatRoutes.js'; // .js 확장자 주의
import askRoute from './src/routes/chatgpt.js'; // .js 확장자 주의

import shareRoutes from './src/routes/shareRoutes.js';
import multer from 'multer';

dotenv.config();

const app = express();
const port = 3000;

const upload = multer({ dest: 'uploads/' }); 

// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// 라우터 설정 -> 여기 왜 다 다르죠 근데 이거 저(예지) 잘 몰라서 누가 설명해주세요...
app.use('/routes', route);
app.use(chatRoutes);
app.use('/list', listRoutes);
app.use(shareRoutes);
app.use('/', askRoute);


// Swagger 문서 설정
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile))


// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

