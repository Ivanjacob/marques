/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { fetchOrders, fetchOrderById, createOrder, updateOrder, deleteOrder } from '../utils/stockAxios'
import { DataGrid } from '@mui/x-data-grid';

import Header from '../views/Header.js';
import Button from '../views/Button.js';

function Orders() {



  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
        try{
            const response = await fetchOrders();
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching product data', error);
        }
    }
    fetchData();
}, []);
  
  const columns = [
    // Image, Item, customer, Total Amount, Status, OrderID, Location
    //"image": "http://127.0.0.1:8000/media/images/Nice_Special.jpeg",
    {field: 'id', headerName: 'ID', width: 70},
    {
      field: 'image',
      headerName: 'Image',
      width: 160,
      renderCell: (params) => (
        <div>
          <img
            style={{
              borderRadius: '30px', // Equivalent to rounded-xl
              padding: '18px 0', // Equivalent to py-2 px-0
              height: '100px', // Equivalent to h-20
              marginLeft: '0.75rem', // Equivalent to md:ml-3
              width: '5rem', // Equivalent to w-20
            }}
            src={`http://localhost:8000/media/${params.value}`}
            alt="Order"
          />
        </div>
      ),
    },
    {
      field: 'item_name',
      headerName: 'Item',
      width: 130,
    },
    {
      field: 'customer',
      headerName: 'Customer Name',
      width: 130,
    },
    {
      field: 'full_amount',
      headerName: 'Total Amount',
      type: 'number',
      width: 80,
    },
    {
      field: 'order_status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => (
        <button
          type="button"
          style={{
            //background: params.row.StatusBg,
            //color: 'white',
            padding: '1px', // Equivalent to py-1
            borderRadius: '100px', // Equivalent to rounded-2xl
            fontSize: '12px', // Equivalent to text-md
            width: '80px',
            outline: 'none',
          }}
          // className="text-white py-1 px-2 capitalize rounded-2xl text-md"
        >
          {params.value}
        </button>
      ),
    },
    {
      field: 'order_number',
      headerName: 'Order ID',
      width: 120,
    },
    {
      field: 'delivery_address',
      headerName: 'Location',
      width: 150,
    },
  ];

  
   
  const toolbarOptions = ['search']




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
                
        <Header category="Page" title="Orders" />
        <Button 
          buttonText = "Add Order" 
          to = "/orders"
        />
      </div>
            <DataGrid
                rows={orders}
                columns={columns}
                withFullScreen
                withToolbar
                autoHeight
                allowPaging
                allowSorting
                toolbarOptions={toolbarOptions}
                pageSize={5}
                pagination
                pageSizeOptions={[10, 15, 25]}
                rowHeight={85}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 10,
                    },
                  },
                }}
                disableRowSelectionOnClick
                //checkboxSelection
            />
        </div>
  )
}

export default Orders;
