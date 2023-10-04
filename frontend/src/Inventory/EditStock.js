/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { updateStock, createStock, fetchStockById } from "../utils/stockAxios";
import { useParams } from "react-router-dom";
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import Header from '../views/Header.js';
import Button from '../views/Button.js';

import Buttons from './Buttons.jsx';

function InputField ({ label, name, value, onChange }) {
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

function EditStock(){ 
    const [selectedProduct, setSelectedProduct] = useState("");

    const token = localStorage.getItem("authTokens")
    
    if(token){
        const decode = jwt_decode(token)
        var username = decode.username
    }

    const { id } = useParams();
    const [formData, setFormData] = useState({
        receive_stock: '', /// lets change quantity_in_stock to receive_quantity
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const [stock, setStock] = useState([]);

    useEffect(() => {
        // Fetch the stock data based on the ID from the URL
        async function fetchStockByIdData(){
            try {
                const response = await fetchStockById(id); // call fetchStockById with ID
                const stockData = response.data;
                setFormData(stockData);
            } catch (error) {
                console.error('Error fetching stock data:', error);
            }
        }
        fetchStockByIdData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const receivedStock = parseFloat(formData.receive_stock);

        if(!isNaN(receivedStock)) {
            try{
                // calculate the new quantity_in_stock
                const newQuantityInStock = parseFloat(stock.quantity_in_stock) + receivedStock;

                //create an updated object with the necessary fields
                const updatedStock = {
                    ...stock,
                    quantity_in_stock: newQuantityInStock,
                };

                await updateStock(id, updatedStock);

                window.location.href = "/inventory";
            } catch(error){
                console.error('Error receiving stock:', error);
            } 
        }else {
            console.error('Invalid receive_stock entered:', formData.receive_stock);
        }
    }


    return(
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
            <Header category="Page" title="Receive Stock" />
            <Button buttonText="View Stock" to="/inventory" />
        </div>
        <form onSubmit={handleSubmit} className="col-sm-7" 
            style={{ 
                boxShadow: ' 9px 15px 10px 0px rgba(0,125,125, 0.4)', 
            }}>
            <p>Product: {stock.product_name} </p> 
            <br/>
            <InputField
                label="Quantity"
                name="receive_stock"
                //value={product.quantity_in_stock}
                value = {formData.receive_stock}
                onChange={handleInputChange}
            />
            <br/>
            <p><i>Received By: <b>{username}</b></i> </p>
            <div style={{ padding: '14px' }}>
                <Buttons buttonText="Receive Product" buttonType="submit" />
            </div>
        </form>
    </div>
    )
}
export default EditStock;