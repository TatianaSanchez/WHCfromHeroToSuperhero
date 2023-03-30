const express = require("express");
const router = express.Router();
const productController = require("../../controllers/product.controller");

router
  .get("/", productController.getAllProducts)
  .get("/:productId", productController.getProductById)
  .post("/", productController.createNewProduct);

  module.exports = router;

