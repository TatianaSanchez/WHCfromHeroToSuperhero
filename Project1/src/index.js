const express = require("express");
const v1ApiRouter = require("./api/routes/products.routes.js");
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

const app = express();
const port = 3000;

app.use(express.json());

/* Initializing the path for routes */
app.use(v1ApiRouter)
app.use('/api/v1/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

/* Setting up server */
app.listen(port, () => {
    console.log(`Server is listenin on  http://localhost:${port}`);
})