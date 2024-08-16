import express from 'express';
import {getDetailedRoute} from "../controllers/chatController.js";
import { getImageURL } from '../controllers/shareController.js';
import multer from 'multer';
import path from 'path';

// multer 설정
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');  // 파일을 저장할 디렉토리 설정
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname); // 원본 파일의 확장자 추출
        const baseName = path.basename(file.originalname, ext); // 원본 파일명 추출
        cb(null, `${baseName}-${Date.now()}${ext}`); // 원본 파일명과 확장자를 사용하여 새 파일명 생성
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

// 이미지 파일을 받아 처리하는 라우트 설정
router.post('/share', upload.single('image'), getImageURL);

router.post('/', getDetailedRoute);

export default router;
