const express = require("express");
const router = express.Router();
const productController = require("../../controllers/product.controller");
const {
  validateModel,
  validateParam,
} = require("../../middleware/validation.Middleware");
const productModel = require("../../models/products.model");

router
  .get("/api/v1/products", productController.getAllProducts)
  .get(
    "/api/v1/products/:productId",
    validateParam(productModel.productParams),
    (req, res) => {
      productController.getProductById(req, res);
    }
  )
  .post(
    "/api/v1/products",
    validateModel(productModel.productBody),
    (req, res) => {
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
    }
  )
  .patch(
    "/api/v1/products/:productId",
    validateModel(productModel.productBody),
    (req, res) => {
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
    }
  )
  .delete(
    "/api/v1/products/:productId",
    validateParam(productModel.productParams),
    (req, res) => {
      productController.deleteProduct(req, res);
    }
  );

module.exports = router;
