const express = require("express");
const { parse } = require("path");
const port = 3000;

const app = express();
const productsData = require("./Data/products.json");
const products = productsData.products;


app.get("/", (request, response) => {
  response.send("Hello from Express!");
});

app.get("/api/v1/products", (request, response) => {
  response.json(products);
});

app.get("/api/v1/products/:productId", (request, response) => {
    const { productId } = request.params;
    const product = products.find(prod => prod.id === parseInt(productId));
    if(product){
        response.json(product);
    }
    else{
        response.send(`Product whit ID ${productId} does not exist.`)
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
