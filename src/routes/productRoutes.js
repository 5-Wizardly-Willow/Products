const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.route('/')
.get(productController.getAllProducts)
.post(productController.CreateProduct);


router.route('/:product_id')
.get(productController.getProductById)
.patch(productController.UpdateProduct)
.delete(productController.DeleteProduct);

router.get('/:product_id/styles', productController.getProductStyles);

router.get('/:product_id/related' , productController.getRelatedProducts);

/*
input : product_id

/products/:product_id -> products
/products//:product_id/styles -> styles
/products//:product_id/related -> products
*/

module.exports = router;