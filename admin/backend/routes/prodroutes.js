const express = require('express');
const router = express.Router();
const productController = require('../controllers/prodcontrollers');


router.get('/', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/add', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
