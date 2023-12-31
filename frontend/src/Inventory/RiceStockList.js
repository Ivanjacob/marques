/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { fetchStocks, createStock, updateStock, deleteStock } from '../utils/stockAxios';
import { Link, useNavigate } from "react-router-dom";

import Header from '../views/Header.js';
import { DataGrid } from '@mui/x-data-grid';
import Button from '../views/Button.js';

import { createSvgIcon } from '@mui/material/utils';
import { Tooltip } from '@mui/material'
import { IconButton } from '@mui/material'

import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SellIcon from '@mui/icons-material/Sell';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { blue } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import Icon from '@mui/material/Icon';

function RiceStockList(){
    
    const [riceStocks, setRiceStocks] = useState([]);
    const [formData, setFormData] = useState({});
    const [productData, setProductData] = useState({});
    

    useEffect(() => {
        async function fetchStocksData() {
            try{
                const response = await fetchStocks();
                setRiceStocks(response.data);
                
            } catch (error) {
                console.error('Error fetching rice stock data', error);
            }
        }
        fetchStocksData();
    }, []);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            if (formData.id){

                await updateStock(formData.id, formData);
            } else {
                await createStock(formData);
            }
            const response = await fetchStocks();
            setRiceStocks(response.data);

            setFormData({});
        } catch (error) {
            console.error('Error creating/updating rice stock data', error);
        }
    };

    const handleDelete = async (id) => {
        try{
            await deleteStock(id);

            const response = await fetchStocks();
            setRiceStocks(response.data);
        } catch (error) {
            console.error('Error deleting rice stock:', error);
        }
    };

    const handleUpdateStockList = async () => {
        try {
            const response = await fetchStocks();
            setRiceStocks(response.data);
        } catch (error) {
            console.error('Error fetching rice stock data', error);
        }
    }

   
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product_category', headerName: 'Category', width: 120 },
        { field: 'product_name', headerName: 'Item Name', width: 180 },
        { 
            field: 'quantity_in_stock', 
            headerName: 'Quantity in Stock', 
            width: 180,
            renderCell: (params) => {
                const isLowStock =  params.value < params.row.reorder_level;
                const cellStyle = isLowStock ? { 
                    backgroundColor: 'red',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '4px',
                } : {};
                const textStyle = isLowStock ? { color: 'white' } : {} // Define the inline style object

                return (
                    <div style={cellStyle}>
                        <span style={textStyle}>{params.value}</span>
                    </div>
                )
            }
        },
        { field: 'reorder_level', headerName: 'Re-Order Level', width: 140,},
        {
            field: 'last_updated',
            headerName: 'Last Updated',
            width: 160,
            renderCell: (params) => {
                // convert ISO date string to Date object
                const lastUpdatedDate = new Date(params.value);

                // format date and time
                const formattedDate = lastUpdatedDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                });

                const formattedTime = lastUpdatedDate.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                });
                
                return <span>{`${formattedDate} ${formattedTime}`}</span>;
            },
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 120,
            renderCell: (params) => (
                <div>
                    <Tooltip title="Receive">
                        <AddCircleIcon
                            style = {{ marginLeft: '0.5rem', cursor: "pointer" }}
                            sx={{ color: blue[600], fontSize: 25 }}
                            onClick = {() => handleReceiveClick(params.row.id)}
                        />
                    </Tooltip>
                    <Tooltip title="Issue">
                        <SellIcon
                            style = {{ marginLeft: '0.5rem', cursor: "pointer" }}
                            sx={{ color: blue[600], fontSize: 25 }}
                            onClick = {() => handleIssueClick(params.row.id)}
                        />
                    </Tooltip>
                </div>
            )
        }
    ];
    
    const navigate = useNavigate();
    
    const handleReceiveClick = (id) => {
        navigate(`/inventory/receive-product/${id}`)
    };

    const handleIssueClick = (id) => {
        navigate(`/inventory/issue-product/${id}`)
    }
    
    const toolbarOptions = ['search'];

    const editing = { allowDeleting: true, allowEditing: true };

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
                <Header category="Page" title="Products in Stock" />
                <Button 
                    buttonText = "Add Rice Stock" 
                    to = "/inventory/add-stock"
                />
            </div>
            <DataGrid
                rows={riceStocks}
                columns={columns}
                withToolbar 
                withFullScreen
                autoHeight
                allowPaging
                allowSorting
                toolbarOptions={toolbarOptions}                
                pageSizeOptions={[10, 25]}
                initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 10,
                      },
                    },
                  }}
                  disableRowSelectionOnClick
//                checkboxSelection
                //onRowDoubleClick={(row) => setFormData(row.data)}
            />
        </div>
    );
}
export default RiceStockList;
// <div>
// <h1>Rice Stock List</h1>
// <form onSubmit={handleSubmit}>
//     <input
//         type="text"
//         name="item_name"
//         placeholder="Item Name"
//         value={formData.item_name || ''}
//         onChange={handleInputChange}
//     />
//     <button type="submit">Submit</button>
// </form>
// <ul>
//     {riceStocks.map((riceStock) => (
//         <li key={riceStock.id}>
//             {riceStock.id}
//             {riceStock.item_name}
//             <button onClick={() => setFormData(riceStock)}>Edit</button>
//             <button onClick={() => handleDelete(riceStock.id)}>Delete</button>
//         </li>
//     ))}
// </ul>
// </div>
