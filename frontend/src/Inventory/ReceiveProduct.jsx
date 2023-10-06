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
import React, { useState, useEffect, Component } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchStockById, fetchProductName, updateStock } from '../utils/stockAxios';

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


function ReceiveProduct(){

    const token = localStorage.getItem("authTokens");
    const navigate = useNavigate();

    if(token){
        const decode = jwt_decode(token);
        var username = decode.username;
    }

    const { id } = useParams();
    const [receive_stock, setReceiveStock] = useState(0);
    const [productName, setProductName] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetchStockById(id);
                const currentStock = response.data;

                setReceiveStock(currentStock.quantity_in_stock);
                setProductName(currentStock.product_name);

                // Fetch the product name based on the product ID
                // Replace fetchProductName with the actual function to fetch the product name
                //const productNameResponse = await fetchProductName(currentStock.product);
                //setProductName(productNameResponse.data.name);
                
            } catch (error) {
                console.error("Error receiving product:", error);
            }
        }
        fetchData();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReceiveStock(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            //const navigate = useNavigate();
            const response = await fetchStockById(id);
            const currentStock = response.data;
            const newQuantityInStock = parseInt(currentStock.quantity_in_stock) + parseInt(receive_stock);

            const updatedStockData = {
                ...currentStock,
                quantity_in_stock: newQuantityInStock,
            };

            await updateStock(id, updatedStockData);
            
            // Redirect back to the RiceStockList page
            navigate('/inventory');

        } catch (error){
            console.error("Error receiving product:", error);
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
            <form
                onSubmit={handleSubmit}
                className="col-sm-7"
                style={{
                    boxShadow: ' 9px 15px 10px 0px rgba(0,125,125, 0.4)',
                }}
            >
                <p>
                    <b>Product: <span style={{ color: 'red', fontStyle: 'italic' }} >{productName}</span></b>
                    <img src="https://img1.wsimg.com/isteam/ip/d0e5736f-1d23-476a-a37a-f536dea1b248/M.R.G-products-kenya-select-1-300x228-removebg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280" alt="Product " />
                    </p>
                <br />
                <InputField
                    type="number"
                    label="Receive Quantity"
                    name="receive_stock"
                    value={receive_stock}
                    onChange={handleInputChange}
                />
                <br />
                <p><i>Received By: <b>{username}</b></i></p>
                <div style={{ padding: '14px' }}>
                    <Buttons buttonText="Receive Product" buttonType="submit" />
                </div>
            </form>
        </div>
    )
}
export default ReceiveProduct;




// class ReceiveProduct extends Component {
    
//     constructor(props){
//         super(props);
//         this.state = {
//             receive_stock: 0, // Initialize with 0
//         };
//     }

//     handleInputChange = (e) => {
//         const { name, value } = e.target;
//         this.setState({ [name]: value });
//     };

//     handleSubmit = async (e) => {
//         e.preventDefault();
//         componentDidMount();{
//             const { id } = this.props.match.params;
//         };
//         try {
            
//             const navigate = useNavigate();
//             const response = await fetchStockById(id);
//             const currentStock = response.data;
//             const newQuantityInStock = parseInt(currentStock.quantity_in_stock) + parseInt(this.state.receive_stock);

//             const updatedStockData = {
//                 ...currentStock,
//                 quantity_in_stock: newQuantityInStock,
//             };

//             await updateStock(id, updatedStockData);

//             // Redirect back to the RiceStockList page
//             navigate('/inventory');

//         } catch (error) {
//             console.error("Error receiving product:", error);
//         }
//     };


//     render(){
        
        
//         const token = localStorage.getItem("authTokens")

//         if(token){
//             const decode = jwt_decode(token)
//             var username = decode.username
//         }

//         return( 
//             <div
//                 style={{
//                     margin: '2rem',
//                     marginTop: '2rem',
//                     padding: '0.5rem',
//                     backgroundColor: '#fff',
//                     borderRadius: '1.5rem',
//                 }}
//             >
//             <div
//                 style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     padding: '2px',
//                     marginLeft: '6px',
//                     marginRight: '6px',
//                     position: 'relative',
//                     alignItems: 'center',
//                     background: 'sky-blue',
//                 }}
//             >
//                 <Header category="Page" title="Receive Stock" />
//                 <Button buttonText="View Stock" to="/inventory" />
//             </div>
//             <form  
//                 onSubmit={this.handleSubmit}
//                 className="col-sm-7" 
//                 style={{ 
//                     boxShadow: ' 9px 15px 10px 0px rgba(0,125,125, 0.4)', 
//                 }}>
//                 <p>Product:  </p> 
//                 <br/>
//                 <InputField
//                     type="number"
//                     label="Quantity"
//                     name="receive_stock"
//                     value={this.state.receive_stock}
//                     onChange={this.handleInputChange}
//                     //value={product.quantity_in_stock}
//                     //value = {receiveQuantity}
//                     //onChange={(e) => setReceiveQuantity(e.target.value)}
//                 />
//                 <br/>
//                 <p><i>Received By: <b>{username}</b></i> </p>
//                 <div style={{ padding: '14px' }}>
//                     <Buttons buttonText="Receive Product" buttonType="submit" />
//                 </div>
//             </form>
//         </div>
//         );
//     }
// }
// export default ReceiveProduct;