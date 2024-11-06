import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';


const swaggerDocs = swaggerJsDoc({
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API information',
    },
  },
  apis: ['./routes/*.ts'],
});

export const setupSwagger = (app: Application): void => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
