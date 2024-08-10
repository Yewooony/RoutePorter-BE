import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: "RoutePorter API 명세서",
    description: "RoutePorter API",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Local development server"
    },
    {
      url: "https://routeport.co.kr",
      description: "Production server"
    }
  ],
  schemes: ["https", "http"],
};

const outputFile = "./swagger-output.json";  // 같은 위치에 swagger-output.json을 만든다.
const endpointsFiles = [
  "../index.js"  // 라우터가 명시된 곳을 지정해준다.
];

// swaggerAutogen을 호출하여 Swagger 문서를 생성
swaggerAutogen(outputFile, endpointsFiles, doc);

