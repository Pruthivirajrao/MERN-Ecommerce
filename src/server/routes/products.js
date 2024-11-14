// src/server/routes/products.js
import express from "express";
import Product from "../models/product.js";

const router = express.Router();

// Getting all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Adding a new product
router.post("/", async (req, res) => {
    const product = new Product(req.body);
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.json({ message: err.message });
    }
});

export default router;
