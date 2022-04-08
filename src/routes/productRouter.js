const express = require('express');
const router = express.Router();
const productController = require('../controller/productController')

router.get('/detail', productController.productDetail);
router.get('/cart', productController.productCart);
router.get('/edit', productController.editProduct);
router.get('/add', productController.addProduct);



module.exports = router;
