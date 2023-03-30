const fs = require("fs");
const databaseFile = require("../database/products.txt");

function saveData(data) {
  fs.writeFileSync(databaseFile, JSON.stringify(data));
}

function getData() {
  return fs.existsSync(databaseFile)
    ? JSON.parse(fs.readFileSync(databaseFile))
    : [];
}

const getAllProducts = () => {
  const productsList = getData();

  return productsList;
};

const getProductById = (productId) => {
  const productsList = getData();
  const product = productsList.filter(p => p.id === productId);

  return product;
};

const createNewProduct = (product) => {
  const productsList = getData();
  productsList.push(product);
  saveData(productsList);

  return productsList;
};

const updateProduct = (productId, productData) => {
    const productsList = getData();
    const index = productsList.findIndex(p => p.id === productId);
    const updatedProduct = { ...productsList[index], ...productData };
    productsList[index] = updatedProduct;
    saveData(todoList);

    return productsList[index];
}

const deleteProduct = (productId) => {
    const productsList = getData();
    const newProductsList = productsList.filter(p => p.id !== productId);
    saveData(newProductsList);

    return newProductsList;
}
