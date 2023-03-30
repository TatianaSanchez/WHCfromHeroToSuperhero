const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/api/routes/products.routes.js']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./src/index')           // Your project's root file
})