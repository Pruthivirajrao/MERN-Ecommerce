import React from 'react';

const ProductItem = ({ product }) => (
    <div>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
        <img src={product.imageUrl} alt={product.name} width="100" />
    </div>
);

export default ProductItem;
