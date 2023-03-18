const http = require("http");

const host = "localhost";
const port = 8000;

const response = (res, htmlCode) => {
  res.setHeader("content-type", "text/html");
  res.writeHead(200);
  res.end(htmlCode);
};

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/other") {
    response(res, "<p>this is another route</p>");
  } else {
    response(res, "<p>HTML code</p>");
  }
});

server.listen(port, host, () => {
  console.log(`server is listenin on htttp://${host}:${port}`);
});
