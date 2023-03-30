const express = require("express");
const v1ApiRouter = require("./api/routes/productRoutes");

const app = express();
const port = 3000;

app.use(express.json());

/* Initializing the path for routes */
app.use("/api/v1/products/", v1ApiRouter);

/* Setting up server */
app.listen(port, () => {
    console.log(`Server is listenin on port ${port}`);
})