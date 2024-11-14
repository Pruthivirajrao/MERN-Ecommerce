// src/client/components/ProductList.js
import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import axios from "axios";
import "./ProductList.css"

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const fetchProducts = () => {
        axios.get("http://127.0.0.1:3000/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log("Error occurred for fetch:", err));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Handle the search query change
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filtering products based on the input value
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h2>Product List</h2>
            <input 
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
                className="search-input"
            />
            <div className='flex'>
                {filteredProducts.map(product => (
                    <ProductItem key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
