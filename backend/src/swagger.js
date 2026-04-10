const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API sanitaria',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3000/sanitaria',
      },
    ],
    tags: [
      {
        name: 'Cassetes',
        description: 'Operaciones sobre cassetes',
      },
      {
        name: 'Muestras',
        description: 'Operaciones sobre muestras',
      },
    ],
  },
  apis: ['./src/routes/*.js'], 
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};