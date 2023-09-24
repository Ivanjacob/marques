/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { fetchRiceStocks, createRiceStock, updateRiceStock, deleteRiceStock } from '../utils/stockAxios'
import Header from '../views/Header.js';
import { DataGrid } from '@mui/x-data-grid';


function RiceStockList(){
    
    const [riceStocks, setRiceStocks] = useState([]);
    const [formData, setFormData] = useState({});
    

    useEffect(() => {
        async function fetchData() {
            try{
                const response = await fetchRiceStocks();
                setRiceStocks(response.data);
            } catch (error) {
                console.error('Error fetching rice stock data', error);
            }
        }
        fetchData();
    }, []);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            if (formData.id){

                await updateRiceStock(formData.id, formData);
            } else {
                await createRiceStock(formData);
            }
            const response = await fetchRiceStocks();
            setRiceStocks(response.data);

            setFormData({});
        } catch (error) {
            console.error('Error creating/updating rice stock data', error);
        }
    };

    const handleDelete = async (id) => {
        try{
            await deleteRiceStock(id);

            const response = await fetchRiceStocks();
            setRiceStocks(response.data);
        } catch (error) {
            console.error('Error deleting rice stock:', error);
        }
    };

    
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'category', headerName: 'Category', width: 120 },
        { field: 'item_name', headerName: 'Item Name', width: 180 },
        { field: 'quantity', headerName: 'Quantity', width: 100 },
        { field: 'phone_number', headerName: 'Phone Number', width: 120 },
        { field: 'created_by', headerName: 'Created By', width: 140 },
        { field: 'reorder_level', headerName: 'Reorder Level', width: 130 },
    ];
    
    const toolbarOptions = ['search'];

    const editing = { allowDeleting: true, allowEditing: true };

    return (
        <div style={{ margin: "2rem", marginTop: "2rem", padding: "0.5rem",  backgroundColor: "#fff", borderRadius: "1.5rem", }}>

            <Header category="Page" title="Rice Stock" />

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
                checkboxSelection
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
