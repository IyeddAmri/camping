const express = require('express');
const router = express.Router();
const productController = require('../controllers/productscontroller');


router.get('/get', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
