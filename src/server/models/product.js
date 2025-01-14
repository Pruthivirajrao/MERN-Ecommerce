// src/server/models/product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    description: String,
    imageUrl: String
});

const Product = mongoose.model("Product", productSchema);

export default Product;
