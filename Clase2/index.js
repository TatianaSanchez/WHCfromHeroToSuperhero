const http = require("http");

const host = "localhost";
const port = 8000;

const response = (res, message) => {
  res.setHeader("content-type", "text/html");
  res.writeHead(200);
  res.end(`<p> ${message} </p>`);
};

const writeJSONResponse = (res, json) => {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify(json));
};

const server = http.createServer((req, res) => {
  const url = req.url;
  
  if (url === "/other") {
    response(res, "this is another route</p>");
  } else {
    response(res, "HTML code");
  }
});

server.listen(port, host, () => {
  console.log(`server is listenin on htttp://${host}:${port}`);
});
