const http = require("http");

const host = "localhost";
const port = 8000;

const response = (res, message) => {
  res.setHeader("content-type", "text/html");
  res.writeHead(200);
  res.end(`<p> ${message} </p>`);
};

function getProducts(res, json) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify(json));
}

const products = [
  {
    name: "Reloj",
    price: 300,
    quantity: 2,
  },
  {
    name: "Correa",
    price: 100,
    quantity: 6,
  },
  {
    name: "Sombrero",
    price: 50,
    quantity: 3,
  },
];

const writeJSONResponse = (res, json) => {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify(json));
};

const server = http.createServer(async (req, res) => {
  const url = req.url;
  let body = "";

  await req.on("data", (chunk) => {
    body += chunk;
  });

  if (url === "/other") {
    response(res, "this is another route</p>");
  } else if (url === "/api/v1/products") {
    const method = req.method;
    console.log("Method", method);
    if (method === "GET") {
      writeJSONResponse(res, products);
    } else if (method === "POST") {
      const product = JSON.parse(body);
      products.push(product);
      writeJSONResponse(res, products);
    } else if (method === "DELETE") {
      const productInformation = JSON.parse(body);
      const productName = productInformation.name;
      if (productName) {
        const indexProduct = products.findIndex((p) => p.name == productName);

        console.log("index of product", indexProduct);
        if (indexProduct !== -1) {
          products.splice(indexProduct, 1);
        }
        writeJSONResponse(res, products);
      }
    }
  } else {
    response(res, "HTML code");
  }
});

server.listen(port, host, () => {
  console.log(`server is listenin on htttp://${host}:${port}`);
});
