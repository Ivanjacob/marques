/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import jwt_decode from 'jwt-decode';
import { useParams, useNavigate } from "react-router-dom";
import { fetchOrderById, updateOrder } from '../utils/stockAxios.js';

import Header from '../views/Header.js';
import Button from '../views/Button.js';
import Buttons from '../Inventory/Buttons';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

import PaidIcon from '@mui/icons-material/Paid';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

function OrderApproval() {
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

  //  const rawDate = new Date(order.order_date);
//    const formattedDate = `${rawDate.getDate()} - ${rawDate.toLocaleString('en-us', { month: 'long' })} - ${rawDate.getFullYear()}`;


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
            <Header category="Page" title="Orders Assessment" />
            <Button buttonText="View Orders" to="/orders" />
        </div>
        {order && (
            <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    marginLeft: '5rem',
                    maxWidth: 700,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <Grid container spacing={8}>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img 
                                alt="complex" 
                                //src="https://img1.wsimg.com/isteam/ip/d0e5736f-1d23-476a-a37a-f536dea1b248/M.R.G-products-kenya-select-1-300x228-removebg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280" 
                                src={`http://127.0.0.1:8000/media/${order.image}`}
                                //{`http://localhost:8000/media/${params.value}`}
                            />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div" style={{ fontSize: '20px' }} >
                                    <strong>Item Name: </strong>{order.item_name}
                                </Typography>
                                <Typography variant="subtitle1" component="div">
                                    <strong>Quantity: </strong>{order.quantity}
                                </Typography>
                                <Typography variant="subtitle1" component="div">
                                    <strong>Order Number: </strong>{order.order_number}
                                </Typography>
                                <Typography variant="subtitle1" component="div">
                                    <strong>Customer: </strong>{order.customer}
                                </Typography>
                                <Typography  variant="subtitle1" component="div" >
                                    <strong>Delivery Status: </strong>{order.delivery_status}
                                </Typography>
                                <Typography variant="subtitle1" component="div" >
                                    <strong>Payment Method: </strong>{order.payment_method}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                    Status: {order.order_status}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item style={{ fontStyle: 'italic', color: order.payment_status === 'Paid' ? 'green' : 'red' }} >
                            <Typography variant="subtitle1" component="div">
                                <b><PaidIcon />{order.payment_status}</b>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        )}
        {order && order.order_status === 'Pending' && (
            <div style={{ marginTop: '2em', }}>
                <button 
                    onClick={() => handleApproveReject('Approve')} 
                    style={{ 
                        backgroundColor: 'green', 
                        color: 'white',
                        marginLeft: '21rem',
                        borderRadius: '8px',
                        fontWeight: 600,
                        padding: '8px 16px',
                        cursor: 'pointer',
                        transition: 'all 150ms ease',
                        border: 'none',
                    }}
                >
                    Approve
                </button>
                <button 
                    onClick={() => handleApproveReject('Cancelled')} 
                    style={{ 
                        backgroundColor: 'red', 
                        color: 'white', 
                        marginLeft: '1rem',
                        borderRadius: '8px',
                        fontWeight: 600,
                        padding: '8px 16px',
                        cursor: 'pointer',
                        transition: 'all 150ms ease',
                        border: 'none',
                    }}
                >
                    Reject
                </button>
            </div> 
         )}

    </div>
  );
}
export default OrderApproval;

