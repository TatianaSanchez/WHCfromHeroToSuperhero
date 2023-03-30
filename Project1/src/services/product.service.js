const fs = require("fs");
const path = require("path");

function saveData(data) {
  try {
    fs.writeFileSync(databaseFile, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
}

async function getData() {
  try {
    const filePath = path.resolve(
      "C:/Users/jsancht6/OneDrive - Johnson Controls/Documents/Personal/NodeJSWWCM/WHCfromHeroToSuperhero/Project1/src/database/products.txt"
    );
    const data = await fs.promises.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
}

const getAllProducts = async () => {
  const productsList = await getData();

  return productsList;
};

const getProductById = async (productId) => {
  const productsList = await getData();
  const product = productsList.filter((p) => p.id === productId);

  return product;
};

const createNewProduct = async (product) => {
  const productsList = await getData();
  productsList.push(product);
  saveData(productsList);

  return productsList;
};

const updateProduct = (productId, productData) => {
  const productsList = getData();
  const index = productsList.findIndex((p) => p.id === productId);
  const updatedProduct = { ...productsList[index], ...productData };
  productsList[index] = updatedProduct;
  saveData(todoList);

  return productsList[index];
};

const deleteProduct = (productId) => {
  const productsList = getData();
  const newProductsList = productsList.filter((p) => p.id !== productId);
  saveData(newProductsList);

  return newProductsList;
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
