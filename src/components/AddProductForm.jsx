// src/client/components/AddProductForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = ({ addProduct }) => {
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:3000/api/products", productData);
      alert("Product added successfully!");

      // Pass the new product to the parent component
      addProduct(response.data);

      // Reset the form fields
      setProductData({ name: '', category: '', price: '', description: '', imageUrl: '' });
      window.location.reload()
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Product</h3>
      <input type="text" name="name" placeholder="Product Name" value={productData.name} onChange={handleChange} required />
      <input type="text" name="category" placeholder="Category" value={productData.category} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={productData.price} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" value={productData.description} onChange={handleChange} required />
      <input type="text" name="imageUrl" placeholder="Image URL" value={productData.imageUrl} onChange={handleChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
