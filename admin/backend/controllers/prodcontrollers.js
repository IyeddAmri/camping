const productModel = require('../models/prodmodels');

const productController = {
    getAllProducts: (req, res) => {
        productModel.getAllProducts((err, results) => {
            if (err) {
                console.error('Error retrieving products: ' + err);
                res.status(500).json({ message: 'Internal server error' });
                return;
            }
            res.status(200).json(results);
        });
    },

    getProductById: (req, res) => {
        const productId = req.params.id;
        productModel.getProductById(productId, (err, result) => {
            if (err) {
                console.error('Error retrieving product: ' + err);
                res.status(500).json({ message: 'Internal server error' });
                return;
            }
            if (result.length === 0) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            res.status(200).json(result[0]);
        });
    },

    createProduct: (req, res) => {
        const productData = req.body;
        productModel.createProduct(productData, (err, result) => {
            if (err) {
                console.error('Error creating product: ' + err);
                res.status(500).json({ message: 'Internal server error' });
                return;
            }
            res.status(201).json({ message: 'Product created successfully' });
        });
    },

    updateProduct: (req, res) => {
        const productId = req.params.id;
        const productData = req.body;
        productModel.updateProduct(productId, productData, (err, result) => {
            if (err) {
                console.error('Error updating product: ' + err);
                res.status(500).json({ message: 'Internal server error' });
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            res.status(200).json({ message: 'Product updated successfully' });
        });
    },

    deleteProduct: (req, res) => {
        const productId = req.params.id;
        productModel.deleteProduct(productId, (err, result) => {
            if (err) {
                console.error('Error deleting product: ' + err);
                res.status(500).json({ message: 'Internal server error' });
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            res.status(200).json({ message: 'Product deleted successfully' });
        });
    }
};

module.exports = productController;
