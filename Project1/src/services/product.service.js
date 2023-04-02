const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

function saveData(data) {
  try {
    fs.writeFileSync(
      "C:/Users/jsancht6/OneDrive - Johnson Controls/Documents/Personal/NodeJSWWCM/WHCfromHeroToSuperhero/Project1/src/database/products.txt",
      JSON.stringify(data)
    );
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
  } catch (error) {
    throw { status: 500, message: error };
  }
}

const getAllProducts = async () => {
  try {
    const productsList = await getData();
    return productsList;
  } catch (error) {
    throw error;
  }
};

const getProductById = async (productId) => {
  try {
    const productsList = await getData();
    const product = productsList.filter((p) => p.id === productId);
    if (!product) {
      throw {
        status: 400,
        message: `Can't find product with the id '${productId}'`,
      };
    }
    return product;
  } catch (error) {
    throw error;
  }
};

const createNewProduct = async (newProduct) => {
  try {
    const producToInsert = {
      id: uuid(),
      ...newProduct,
      createdAt: new Date().toLocaleString("en-US", {
        timeZone: "America/Bogota",
      }),
      updatedAt: new Date().toLocaleString("en-US", {
        timeZone: "America/Bogota",
      }),
    };
    const productsList = await getData();
    productsList.push(producToInsert);
    saveData(productsList);
    return producToInsert;
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (productId, productData) => {
  try {
    const productsList = await getData();
    const productIndex = productsList.findIndex(p => p.id === productId);
    if (!productIndex) {
      throw {
        status: 400,
        message: `Can't find product with the id '${productId}'`,
      };
    }
    const updatedProduct = {
      ...productsList[productIndex],
      ...productData,
      updatedAt: new Date().toLocaleString("en-US", {
        timeZone: "America/Bogota",
      }),
    };
    productsList[productIndex] = updatedProduct;
    saveData(productsList);
    return productsList[productIndex];
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (productId) => {
  const productsList = await getData();
  const product = productsList.filter(p => p.id === productId);
  if (!product) {
    throw {
      status: 400,
      message: `Can't find product with the id '${productId}'`,
    };
  }

  const newProductsList = productsList.filter((p) => p.id !== productId);
  saveData(newProductsList);

  return `product ${product[0]["name"]} was successfully eliminated`;
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
