const express = require("express");
const router = express.Router();
const productController = require("../../controllers/product.controller");

router
  .get("/api/v1/products", productController.getAllProducts)
  .get("/api/v1/products/:productId", productController.getProductById)
  .post("/api/v1/products", (req, res) => {
    /*  #swagger.parameters['parameter_name'] = {
                in: 'body',
                schema: {
                    $name: 'test',
                    $description: 'Product Test',
                    price: 100,
                    quantity: 20,
                    category: 'Test'
                }
        } */
    productController.createNewProduct(req, res);
  })
  .patch("/api/v1/products/:productId", (req, res) => {
    /*  #swagger.parameters['parameter_name'] = {
                in: 'body',
                schema: {
                    $name: 'test',
                    $description: 'Product Test',
                    price: 100,
                    quantity: 20,
                    category: 'Test'
                }
        } */
    productController.updateProduct(req, res);
  })
  .delete("/api/v1/products/:productId", productController.deleteProduct);

module.exports = router;
