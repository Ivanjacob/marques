/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '../utils/stockAxios'
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import EditIcon from '@mui/icons-material/Edit';
import { blue } from '@mui/material/colors';
import { red } from '@mui/material/colors';


import Header from '../views/Header.js';
import Button from '../views/Button.js';
import Buttons from './Buttons.jsx';

function Product() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [productsData, setProductsData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try{
                const response = await fetchProducts();
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching product data', error);
            }
        }
        fetchData();
    }, []);

    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'name', headerName: 'Name', width: 170},
        {field: 'category', headerName: 'Category', width: 170},
        {field: 'description', headerName: 'Description', width: 130},
        {field: 'price', headerName: 'Price', width: 130},
        {
            field: 'actions',
            headerName: 'Actions',
            width: 120,
            renderCell: (params) => (
                <div>
                    <EditIcon 
                        style = {{ marginLeft: '0.5rem', cursor: "pointer" }}
                        sx={{ color: blue[600], fontSize: 25 }}
                        onClick = {() => handleEditClick(params.row.id)}
                    />
                    <DeleteRoundedIcon 
                        style = {{ marginLeft: '0.5rem', cursor: "pointer" }}
                        sx={{ color: red[600], fontSize: 25 }}
                        onClick = {() => handleDeleteClick(params.row.id)}

                    />
                </div>
            )
        }
    ];

    const handleEditClick = (id) => {
        navigate(`/inventory/edit-product/${id}`)
    };

    const handleDeleteClick = async (id) => {
        try{
            await deleteProduct(id);

            const response = await fetchProducts();
            setProducts(response.data);
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const toolbarOptions = ['search']
    
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
            <Header category="Page" title="Products" />
            <Button 
                buttonText = "Add Product" 
                to = "/inventory/add-product"
            />
            </div>
            <DataGrid
                rows={products}
                columns={columns}
                withToolbar
                withFullScreen
                autoHeight
                allowPaging
                allowSorting
                toolbarOptions={toolbarOptions}
                editSettings={editing}
                pageSettings={{ pageSize: 5, pageSizes: true }}
                pageSizeOptions={[10, 25]}
                //checkboxSelection
            />
        </div>
    )
}

export default Product