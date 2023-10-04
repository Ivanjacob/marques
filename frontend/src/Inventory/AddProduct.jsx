/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '../utils/stockAxios'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';


import Header from '../views/Header.js';
import Button from '../views/Button.js';

import Buttons from './Buttons.jsx';

function InputField ({ label, name, value, onChange }) {
    return (
        <div >
            <label htmlFor={name}>{label}:</label>
            <input
                className="form-control"
                type="text"
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}


function AddProduct() {
    const initialFormData = {
        name: "",
        category: "",
        description: "",
        price: "",
    };

    const [formData, setFormData ] = useState(initialFormData);

    const handleInputChange = (e) => {
        const {name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createProduct(formData);
            setFormData(initialFormData);
        } catch (error) {
            console.error("Error creating product:", error);
        }
    };
    
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/ricemart/categories/')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const handleSelectCategory = (e) => {
        const selectedValue = e.target.value;
        setSelectedCategory(selectedValue);
        setFormData({ ...formData, category: selectedValue });
    };

    return (
        <div style={{ margin: "2rem", marginTop: "2rem", padding: "0.5rem",  backgroundColor: "#fff", borderRadius: "1.5rem", }}>
            <div 
                style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    padding: '2px', 
                    marginLeft: '6px', 
                    marginRight: '6px', 
                    position: 'relative', 
                    alignItems: 'center', 
                    background: 'sky-blue',
                }} 
            >
            <Header category="Page" title="Add Product" />
            <Button 
                buttonText = "View Products" 
                to = "/inventory/products"
            />
            </div>

            <form 
                onSubmit={handleSubmit}
                className="col-sm-7" 
            >
                    <InputField label="Name" name="name" value={formData.name} onChange={handleInputChange} />
                    <div>
                        <label htmlFor="category">Category:</label> 
                        <select className="form-control"
                            name="category"
                            value={selectedCategory}
                            onChange={handleSelectCategory}
                        >
                            <option value=""></option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.name}>
                                    {category.name}
                                </option>
                            ) )}
                        </select>
                    </div>
                    <InputField label="Description" name="description" value={formData.description} onChange={handleInputChange} />
                    <InputField label="Price" name="price" value={formData.price} onChange={handleInputChange} />
                    <div style={{ padding: "14px" }}>
                        <Buttons 
                            buttonText = "Add Product" 
                            buttonType = "submit"
                        />
                    </div>
            </form>
        </div>
    )
}

export default AddProduct;