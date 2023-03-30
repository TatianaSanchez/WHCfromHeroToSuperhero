const productService = require("../services/product.service");


const getAllProducts = async (req, res) => {
  const allProducts = await productService.getAllProducts();
  res.send({ status: "OK", data: allProducts });
};

const getProductById = async (req, res) => {
  const {
    params: { productId },
  } = req;

  if (!productId) {
    return;
  }

  const product = await productService.getProductById(parseInt(productId));
  res.send({ status: "OK", data: product });
};

const createNewProduct = async (req, res) => {
  const product = await productService.createNewProduct(req);
  res.send({ status: "OK", data: product });
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct
};
