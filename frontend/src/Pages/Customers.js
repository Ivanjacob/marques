import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import CircleIcon from '@mui/icons-material/Circle';

import { fetchCustomers } from '../utils/stockAxios';

import Header from '../views/Header.js';
import Button from '../views/Button.js';


function Customers(){

    const[customers, setCustomers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try{
                const response = await fetchCustomers();
                setCustomers(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching product data', error);
            }
        }
        fetchData();
    }, []);

    const columns = [

        {field: 'profile_image', headerName: 'Image', width: 130,
            renderCell: (params) => (
                <div>
                    <img
                        style={{
                            borderRadius: '100%', // Equivalent to rounded-xl
                            padding: '18px 0', // Equivalent to py-2 px-0
                            height: '100px', // Equivalent to h-20
                            marginLeft: '0.75rem', // Equivalent to md:ml-3
                            width: '5rem', // Equivalent to w-20
                        }}
                        src={params.value}
                        alt="Profile"
                    />
                </div>
            ),
        },
        {field: 'email', headerName: 'Email', width: 130},
        {field: 'phone', headerName: 'Phone Number', width: 100},
        {field: 'username', headerName: 'Username', width: 100},
        {field: 'full_name', headerName: 'Full Name', width: 130,
            renderCell: (params) => (
                <div>
                    {params.row.first_name} {params.row.last_name} 
                </div>
            ),
        },
        {field: 'status', headerName: 'Status', width: 100,
            renderCell: (params) => (
                <div style={{ display: 'flex'}}>
                    <div>
                        {params.row.status === "Active" ? <CircleIcon style={{ color: '#8BE78B', fontSize: '16px', marginRight: '8px' }}/> : <CircleIcon style={{ fontSize: '16px', color: 'red', marginRight: '8px' }}/>}
                    </div>
                    <div style={{ fontStyle: "italic" }}>
                        {params.row.status}
                    </div>
                </div>
            ),
        },
        {field: 'customer_id', headerName: 'Customer Id', width: 100},
        {field: 'location', headerName: 'Location', width: 160,
            renderCell: (params) => (
                <div>
                    {params.row.city}, {params.row.address}
                </div>
            ),
        },
    ]


    const toolbarOptions = ['search']

    return(

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
                
                <Header category="Page" title="Customers" />
                <Button 
                    buttonText = "Add Order" 
                    to = "/orders"
                />
            </div>
            <DataGrid
                rows={customers}
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
export default Customers;