// src/server/server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./routes/products.js";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error occurred:", err));

// Product Routes
app.use("/api/products", productRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running successfully at http://127.0.0.1:${PORT}`);
});
