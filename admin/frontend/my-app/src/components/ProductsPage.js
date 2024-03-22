import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductsPage.css'; 

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    Name: '',
    Description: '',
    Price: '',
    Availability: '',
    ImageURL: '',
    Category: ''
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/add', newProduct);
      fetchProducts();
      setNewProduct({
        Name: '',
        Description: '',
        Price: '',
        Availability: '',
        ImageURL: '',
        Category: ''
      });
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleUpdate = async (productId) => {
    try {
      await axios.put(`http://localhost:5000/api/update/${productId}`, newProduct);
      fetchProducts();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);  
    }
  };

  return (
    <div className="products-page">
      <h2>Products</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <input type="text" name="Name" value={newProduct.Name} onChange={handleInputChange} placeholder="Name" required />
        <input type="text" name="Description" value={newProduct.Description} onChange={handleInputChange} placeholder="Description" required />
        <input type="number" name="Price" value={newProduct.Price} onChange={handleInputChange} placeholder="Price" required />
        <input type="number" name="Availability" value={newProduct.Availability} onChange={handleInputChange} placeholder="Availability" required />
        <input type="text" name="ImageURL" value={newProduct.ImageURL} onChange={handleInputChange} placeholder="Image URL" required />
        <input type="text" name="Category" value={newProduct.Category} onChange={handleInputChange} placeholder="Category" required />
        <button type="submit">Add Product</button>
      </form>
      <div className="products-container">
        {products.map(product => (
          <div key={product.ProductID} className="product-box">
            <div className="product-image">
              <img src={product.ImageURL} alt={product.Name} />
            </div>
            <div className="product-details">
              <h3>{product.Name}</h3>
              <p>{product.Description}</p>
              <p>Price: {product.Price}</p>
              <p>Availability: {product.Availability}</p>
              <p>Category: {product.Category}</p>
              <div className="product-buttons">
                <button onClick={() => handleUpdate(product.ProductID)} className="update-button">Update</button>
                <button onClick={() => handleDelete(product.ProductID)} className="delete-button">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
