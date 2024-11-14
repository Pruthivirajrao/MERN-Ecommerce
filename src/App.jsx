// src/client/App.js
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";

const App = () => {
    const [showAddProductForm, setShowAddProductForm] = useState(false);

    const toggleAddProductForm = () => setShowAddProductForm(!showAddProductForm);

    return (
        <div>
            <h2>Hello, welcome to Store</h2>
            <button onClick={toggleAddProductForm}>
                {showAddProductForm ? "Close Form" : "Add New Product"}
            </button>
            {showAddProductForm && <AddProductForm />}
            <ProductList />
        </div>
    );
};

export default App;
