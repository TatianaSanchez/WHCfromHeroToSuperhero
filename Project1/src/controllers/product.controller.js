const productService = require("../services/product.service");

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await productService.getAllProducts();
    res.send({ status: "OK", data: allProducts });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getProductById = async (req, res) => {
  const {
    params: { productId },
  } = req;

  if (!productId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':productId' can not be empty" },
    });
  }

  try {
    const product = await productService.getProductById(productId);
    res.send({ status: "OK", data: product });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewProduct = async (req, res) => {
  const { body } = req;

  

  if (
    !body ||
    !body.name ||
    !body.description ||
    !body.price ||
    !body.quantity ||
    !body.category
  ) {
    res.status(400).send({
      status: "Bad Request",
      data: {
        error:
          "One of the following keys is missing or is empty in request body",
      },
    });
  }

  // *** ADD ***
  const newProduct = {
    name: body.name,
    description: body.description,
    price: body.price,
    quantity: body.quantity,
    category: body.category,
  };

  try {
    const product = await productService.createNewProduct(newProduct);
    res.status(201).send({ status: "OK", data: product });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateProduct = async (req, res) => {
  const { body } = req;
  const {
    params: { productId },
  } = req;

  if (!productId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':productId' can not be empty" },
    });
  }

  if (
    !body ||
    !body.name ||
    !body.description ||
    !body.price ||
    !body.quantity ||
    !body.category
  ) {
    res.status(400).send({
      status: "Bad Request",
      data: {
        error:
          "One of the following keys is missing or is empty in request body",
      },
    });
  }

  // *** Update ***
  const product = {
    name: body.name,
    description: body.description,
    price: body.price,
    quantity: body.quantity,
    category: body.category,
  };

  try {
    const updatedProduct = await productService.updateProduct(productId, product);
    res.status(201).send({ status: "OK", data: updatedProduct });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteProduct = async (req, res) => {
  const {
    params: { productId },
  } = req;

  if (!productId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':productId' can not be empty" },
    });
  }

  try {
    const message = await productService.deleteProduct(productId);
    res.send({ status: "OK", data: message });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct
};
