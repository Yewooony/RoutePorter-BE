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


// 라우터 설정
app.use('/routes', route);
app.use(chatRoutes);

app.use(shareRoutes);

// 라우터 설정
app.use('/', askRoute);


// Swagger 문서 설정
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile))


// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

