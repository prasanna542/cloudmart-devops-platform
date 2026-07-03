const productModel = require("../models/productModel");
const asyncHandler = require("../middleware/asyncHandler");

const getProducts = asyncHandler(async (req, res) => {

    const products = await productModel.getAllProducts();

    res.status(200).json({
        success: true,
        count: products.length,
        data: products
    });

});

module.exports = {
    getProducts
};