import productService from "../services/productService";

const getAllProducts = (req, res) => {
    const allProducts = productService.getAllProducts();
    res.send({status: 'OK', data: allProducts});
}


const getProductById = (req, res) => {
    const {
        params: { productId },
    } = req;

    if(!productId){
        return;
    }

    const product = productService.getProductById(req.params.productId);
    res.send({status: 'OK', data: product});
}