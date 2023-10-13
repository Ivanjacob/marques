/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import jwt_decode from 'jwt-decode';
import { useParams, useNavigate } from "react-router-dom";
import { fetchOrderById, updateOrder } from '../utils/stockAxios.js';

import Header from '../views/Header.js';
import Button from '../views/Button.js';
import Buttons from '../Inventory/Buttons';

function OrdersView() {
    const token = localStorage.getItem("authTokens");
    const navigate = useNavigate();

    if(token){
        const decode = jwt_decode(token);
        var username = decode.username;
    }

    const { id } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() =>{
        async function fetchData() {
            try {
                const response = await fetchOrderById(id);
                setOrder(response.data);
                
            } catch (error) {
                console.error("Error fetching order:", error);
            }
        }
        fetchData();
    }, [id]);


    const handleApproveReject = async (newStatus) => {
        try {
         const statusMapping = {
            'Approve': 'Approved',
            'Cancelled': 'Cancelled',
         };
         const mappedStatus = statusMapping[newStatus];
         if (mappedStatus) {
            await updateOrder(id, { order_status: mappedStatus });
            // Updated the order status in the local state
            setOrder({ ...order, order_status: mappedStatus });
         } else {
            console.error('Invalid Status:', newStatus);
         }
        } catch (error) {
            console.error(`Error ${newStatus.toLowerCase()}ing order:`, error);
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
                <Header category="Page" title="Orders Inspection" />
                <Button buttonText="View Orders" to="/orders" />
            </div>
            <form
            className="col-sm-7"
            style={{
                boxShadow: ' 9px 15px 10px 0px rgba(0,125,125, 0.4)',
            }}>

            {order && (
                <div>
                    <p>
                        <b>Item: <span style={{ color: 'red', fontStyle: 'italic' }} >{order.item_name}</span></b>
                        <img 
                            src="https://img1.wsimg.com/isteam/ip/d0e5736f-1d23-476a-a37a-f536dea1b248/M.R.G-products-kenya-select-1-300x228-removebg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280" 
                            alt="Product " 
                            style={{
                                borderRadius: '10%', 
                                display: 'block', 
                                margin: '0 auto', 
                            }}
                        />
                    </p>
                    <br />
                    <div><strong>Item Name:</strong>{order.item_name}</div>
                    <div><strong>Quantity:</strong>{order.quantity}</div>
                    <div><strong>Order Number:</strong>{order.order_number}</div>
                    <div><strong>Customer:</strong>{order.customer}</div>
                    <div><strong>Delivery Status:</strong>{order.delivery_status}</div>
                    <div><strong>Payment Method:</strong>{order.payment_method}</div>
                    <div><strong>Payment Status:</strong>{order.payment_status}</div>
                </div>
            )}

            {order && order.order_status === 'Pending' && (
               <div>
                    <button onClick={() => handleApproveReject('Approve')} >Approve</button>
                    <button onClick={() => handleApproveReject('Cancelled')} >Reject</button>
               </div> 
            )}
            </form>
        </div>
    );
}
export default OrdersView; 

