const express = require("express");
const app = express();
const port = 3000;
const productsData = require("./Data/products.json");

app.get("/", (request, response) => {
  response.send("Hello from Express!");
});

app.get("/api/v1/products", (request, response) => {
  response.json(productsData.products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
