/* elsint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { createStock } from "../utils/stockAxios";

import axios from 'axios';

import Header from '../views/Header.js';
import Button from '../views/Button.js';

import Buttons from './Buttons.jsx';

function InputField({ label, name, value, onChange }) {
  return (
    <div>
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

function AddRiceStock() {
  const initialFormData = {
    product: "",
    quantity_in_stock: "",
    receive_quantity: "",
    receive_by: "",
    reorder_level: "",
    export_to_CSV: false,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Calculate the new quantity in stock by adding the receive quantity to the current quantity in stock
      const newQuantityInStock = parseInt(formData.quantity_in_stock)

      // Create a new object with the updated quantity_in_stock
      const updatedFormData = { ...formData, quantity_in_stock: newQuantityInStock };

      await createStock(updatedFormData);

      // Clear the form after successfully creating a rice stock entry
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error creating rice stock:", error);
    }
  };


    const [product, setProduct] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState("");
    const [manager, setManager] = useState([]);
    const [selectedManager, setSelectedManager] = useState("");

    useEffect(() => {
      axios.get('http://localhost:8000/ricemart/product/')
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });

        // Fetch manager for the Receive By field
      axios.get('http://localhost:8000/api/inventorymanagers/')
        .then((response) => {
          setManager(response.data);
        })
        .catch((error) => {
          console.error('Error fetching managers:', error);
        });
    }, []);

    const handleSelectProduct = (e) => {
      const selectedValue = e.target.value;
      setSelectedProduct(selectedValue);
      setFormData({ ...formData, product: selectedValue });
    }
    
    const handleSelectManager = (e) => {
      const selectedValue = e.target.value;
      setSelectedManager(selectedValue);
      setFormData({ ...formData, receive_by: selectedValue });
    }
  
  
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
        <Header category="Page" title="Add Rice Stock" />
        <Button buttonText="View Rice Stock" to="/inventory" />
      </div>
      <form 
        onSubmit={handleSubmit}
        className="col-sm-7"
      >
        <div>
        <label htmlFor="product">Product:</label> 
          <select className="form-control"
              name="product"
              value={selectedProduct}
              onChange={handleSelectProduct}
          >
              <option value=""></option>
              {product.map((product) => (
                  <option key={product.id} value={product.id}>
                      {product.name}
                  </option>
              ))}
          </select>
        </div>
        <InputField label="Quantity in Stock" name="quantity_in_stock" value={formData.quantity_in_stock} onChange={handleInputChange} />
        <InputField label="Reorder Level" name="reorder_level" value={formData.reorder_level} onChange={handleInputChange} />
        <div>
        <label htmlFor="receive_by">Receive By:</label>
          <select className="form-control"
              name="receive_by"
              value={selectedManager}
              onChange={handleSelectManager}
          >
              <option value=""></option>
              {manager.map((manager) => (
                  <option key={manager.id} value={manager.id}>
                      {manager.username}
                  </option>
              ))}
          </select>
        </div>
        <div>
          <label htmlFor="export_to_CSV" >Export to CSV:</label>
          <input
            type="checkbox"
            name="export_to_CSV"
            checked={formData.export_to_CSV}
            onChange={(e) => setFormData({ ...formData, export_to_CSV: e.target.checked })}
          />
        </div>
        <div style = {{ padding: "14px" }}>
          <Buttons 
            buttonText = "Add Rice Stock" 
            buttonType = "submit"
          />
        </div>
      </form>
    </div>
  )

}
export default AddRiceStock;



// Product
// Categ