/// Receive products is working with RiceStockList.js and AddRiceStock.js; now lets work on ReceiveProduct.js code that will 
// add or modify the value of Quantity in Stock field in the RiceStockList.js. 
// Note that AddRiceStock for adding rice stock will be used once for one product and later we will only have to change the value of stock in and out of the database.
// ReceiveProduct.js will be a form that will be responsible with
// increasing the value of produts stock in the system through this page we shall enter the value of the products that we have received to the stock. This will be able to increase
// the value of the product or stock selected after we clicked <AddCircleIcon /> button in RiceStockList.js. The ReceiveProduct form will only have one entry point or InputField called Receive Quantity 
//and will have a name as receive_quantity. The value put in this Input field will be value of stock received. Therefore the system will take-in the received_quantity value and add with the quantity_in_stock from RiceStockList.js 
// and the result will be the new quantity_in_stock that will be displayed in RiceStockList.js. The new quantity_in_stock will be saved in the database. How can we achieve this?
// Here is the code for RiceStockList.js

// Here is the code for AddRiceStock.js

// Let's create ReceiveProduct.js code for receiving stock
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchStockById, updateStock } from '../utils/stockAxios';

import jwt_decode from 'jwt-decode';

import Header from '../views/Header.js';
import Button from '../views/Button.js';

import Buttons from './Buttons.jsx';

function InputField ({ label, name, value, type, onChange }) {
    return (
        <div>
            <label htmlFor={name}>{label}:</label>
            <input
                className="form-control"
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}


function ReceiveProduct() {
    const token = localStorage.getItem("authTokens")
    
    if(token){
        const decode = jwt_decode(token)
        var username = decode.username
    }

    const { id } = useParams();
    const navigate = useNavigate();
    const [receiveQuantity, setReceiveQuantity] = useState(0);

    const handleReceive = async() => {
        try {
            // Fetch the existing stock data for the selected product 
            const response = await fetchStockById(id);
            const existingStock = response.data;

            // calculate the new quantity in stock by adding the receive quantity
            const newQuantityInStock = existingStock.quantity_in_stock + parseInt(receiveQuantity);

            //Update the stock with the new quantity in stock
            await updateStock(id, { quantity_in_stock: newQuantityInStock });

            // Redirect back to the RiceStockList page
            navigate("/inventory");
        } catch (error) {
            console.error('Error receiving product:', error);
        }
    };


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
            <form onSubmit={handleReceive} className="col-sm-7" 
                style={{ 
                    boxShadow: ' 9px 15px 10px 0px rgba(0,125,125, 0.4)', 
                }}>
                <p>Product:  </p> 
                <br/>
                <InputField
                    type="number"
                    label="Quantity"
                    name="receive_stock"
                    //value={product.quantity_in_stock}
                    value = {receiveQuantity}
                    onChange={(e) => setReceiveQuantity(e.target.value)}
                />
                <br/>
                <p><i>Received By: <b>{username}</b></i> </p>
                <div style={{ padding: '14px' }}>
                    <Buttons buttonText="Receive Product" buttonType="submit" />
                </div>
            </form>
        </div>
    )
};

export default ReceiveProduct;