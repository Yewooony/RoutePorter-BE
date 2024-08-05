import SwaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        info: {
            title: 'Route Porter API',
            version: '1.0.0',
            description: 'Route Porter API 설명'
        },
        host: 'localhost:3000',
        basepath: '../'
    },
    apis: ['./src/routes/*.js', './swagger/*']
};

export const specs = SwaggerJsdoc(options);