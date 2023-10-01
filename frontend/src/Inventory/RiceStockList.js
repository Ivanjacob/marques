/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { fetchStocks, createStock, updateStock, deleteStock } from '../utils/stockAxios'
import Header from '../views/Header.js';
import { DataGrid } from '@mui/x-data-grid';
import Button from '../views/Button.js';

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

    
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product_category', headerName: 'Category', width: 120 },
        { field: 'product_name', headerName: 'Item Name', width: 180 },
        {field: 'quantity_in_stock', headerName: 'Quantity in Stock', width: 180},
        { field: 'reorder_level', headerName: 'Re-Order Level', width: 140 },
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
    ];
    
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
                <Header category="Page" title="Rice Stock" />
                <Button 
                    buttonText = "Receive Rice Stock" 
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
                editSettings={editing}
                pageSettings={{ pageSize: 10 }}
                pageSizeOptions={[10, 25]}
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
