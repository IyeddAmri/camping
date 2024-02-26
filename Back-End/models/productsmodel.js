const connection = require('../database/index');

const productModel = {
    getAllProducts: (callback) => {
        connection.query('SELECT * FROM products', callback);
    },

    getProductById: (productId, callback) => {
        connection.query('SELECT * FROM products WHERE ProductID = ?', [productId], callback);
    },

    createProduct: (productData, callback) => {
        const { Name, Description, Price, Availability, ImageURL, Category } = productData;
        connection.query('INSERT INTO products (Name, Description, Price, Availability, ImageURL, Category) VALUES (?, ?, ?, ?, ?, ?)',
            [Name, Description, Price, Availability, ImageURL, Category], callback);
    },

    updateProduct: (productId, productData, callback) => {
        const { Name, Description, Price, Availability, ImageURL, Category } = productData;
        connection.query('UPDATE products SET Name=?, Description=?, Price=?, Availability=?, ImageURL=?, Category=? WHERE ProductID=?',
            [Name, Description, Price, Availability, ImageURL, Category, productId], callback);
    },

    deleteProduct: (productId, callback) => {
        connection.query('DELETE FROM products WHERE ProductID=?', [productId], callback);
    }
};

module.exports = productModel;
