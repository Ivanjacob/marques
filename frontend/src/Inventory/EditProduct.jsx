/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProducts, fetchProductById, updateProduct } from '../utils/stockAxios';
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

function EditProduct() {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    quantity: '',
    price: '',
    quantity_in_stock: '',
  });

  const [categories, setCategories] = useState([]);
  //const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Fetch the product data based on the ID from the URL
    async function fetchProductByIdData() {
      try {
        const response = await fetchProductById(id); // call fetchProductById with ID
        const productData = response.data;
        setFormData(productData);

        // Fetch categories for the select input
        const categoriesResponse = await axios.get(
          'http://localhost:8000/ricemart/categories/'
        );
        setCategories(categoriesResponse.data);

        //setSelectedCategory(productData.category);
      } catch (error) {
        console.error('Error fetching product data', error);
      }
    }

    fetchProductByIdData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(id, formData);
      // Redirect to the product list page after successful update
      window.location.href = '/inventory/products';
      
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div
      style={{
        margin: '2rem',
        marginTop: '2rem',
        padding: '0.5rem',
        backgroundColor: '#fff',
        borderRadius: '1.5rem',
      }}
    >
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
        <Header category="Page" title="Edit Product" />
        <Button buttonText="View Products" to="/inventory/products" />
      </div>

      <form onSubmit={handleSubmit} className="col-sm-7">
        <InputField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <div>
          <label htmlFor="category">Category:</label>
          <select
            className="form-control"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value=""></option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <InputField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <InputField
          label="Quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
        />
        <InputField
          label="Price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />
        <InputField
          label="Quantity in Stock"
          name="quantity_in_stock"
          value={formData.quantity_in_stock}
          onChange={handleInputChange}
        />
        <div style={{ padding: '14px' }}>
          <Buttons buttonText="Update Product" buttonType="submit" />
        </div>
      </form> 
    </div>
  );
}

export default EditProduct;

