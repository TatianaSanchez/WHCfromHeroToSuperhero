const express = require("express");

const productsData = require("./Data/products.json");
const products = productsData.products;

const port = 3000;
const app = express();
app.use(express.json());

const errorLogger = (err, req, res, next) => {
  console.log(err);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  res.status(400).json({
    message: err.message,
  });
};

app.get("/", (request, response) => {
  response.send("Hello from Express!");
});

app.get("/api/v1/products", (request, response) => {
  response.json(products);
});

app.get("/api/v1/products/:id", (request, response) => {
    const { productId } = request.params;
    const product = products.find(prod => prod.id === parseInt(productId));
    if(product){
        response.json(product);
    }
    else{
        response.send(`Product whit ID ${productId} does not exist.`)
    }
});

app.use(errorLogger);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
