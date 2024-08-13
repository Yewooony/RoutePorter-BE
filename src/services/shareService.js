import fs from 'fs';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

class ShareService {
    constructor() {
        this.s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION, // 버킷의 리전을 설정
        });
    }

    async uploadImage(imagePath) {
        console.log("이미지 경로:", imagePath); // 디버깅을 위해 파일 경로 출력

        const fileName = path.basename(imagePath); // 파일명과 확장자를 포함한 전체 파일명
        console.log("이미지 이름: ", fileName);

        // 확장자를 추출할 때 "."을 포함하지 않도록 수정
        const imageExtension = path.extname(imagePath).toLowerCase().replace('.', '');
        const baseName = path.basename(imagePath, path.extname(imagePath)); // 파일명 추출
        const now = new Date().toISOString().replace(/[-T:.Z]/g, '');
        const newImageName = `${baseName}_${now}.${imageExtension}`; // 확장자 포함하여 파일명 생성

        // 확장자에 따라 Content-Type 설정
        let contentType;
        switch (imageExtension) {
            case 'jpg':
            case 'jpeg':
                contentType = 'image/jpeg';
                break;
            case 'png':
                contentType = 'image/png';
                break;
            default:
                contentType = 'application/octet-stream';
        }

        const params = {
            Bucket: process.env.S3_BUCKET_NAME, // 환경변수에서 버킷 이름을 가져옴
            Key: `image/${newImageName}`,
            Body: fs.readFileSync(imagePath),
            ContentType: contentType, // 올바르게 설정된 ContentType
        };

        const uploadResult = await this.s3.upload(params).promise();

        // 파일 삭제 (임시 저장된 파일)
        fs.unlinkSync(imagePath);

        console.log("확장자: ", imageExtension);
        return this.getPublicUrl(newImageName);
    }

    getPublicUrl(fileName) {
        return `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/image/${fileName}`;
    }
}

export default new ShareService();
