/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Header from './Header.js';
import useAxios from "../utils/useAxios"
import jwt_decode from 'jwt-decode'
import axios from 'axios';


function Users() {
  
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/users/")
      .then((response) => {
        setUsersData(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  console.log(usersData)

  const columns = [
    //{ field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'profile_image', 
      headerName: 'Image', 
      width: 130,
      renderCell: (params) => (
        <div>
            <img
                style={{
                    borderRadius: '100%', // Equivalent to rounded-xl
                    padding: '18px 0', // Equivalent to py-2 px-0
                    height: '80px', // Equivalent to h-20
                    marginLeft: '0.75rem', // Equivalent to md:ml-3
                    width: '3rem', // Equivalent to w-20
                }}
                src={params.value}
                alt="Profile"
            />
        </div>
    ),
    },
    {field: 'username', headerName: 'Username', width: 200},
    {field: 'email', headerName: 'Email', width: 300},
  ];
  
  const toolbarOptions = ['Search']

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div style={{ margin: "2rem", marginTop: "6rem", padding: "0.5rem",  backgroundColor: "#fff", borderRadius: "1.5rem", }}>
    <Header category="Page" title="Users" />
    {loading ? (
      <p>Loading...</p>
    ): (
        <DataGrid
          rows={usersData}
          columns={columns}
          width="100%"
          allowPaging
          allowSorting
          toolbarOptions={toolbarOptions}
          editSettings={editing}
          pageSettings={{ pageCount: 10 }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      )}
    </div>
  );
}

export default Users;



// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   {
//     field: 'avatar',
//     headerName: 'Avatar',
//     width: 130,
//     renderCell: (params) => (
//       <img
//         src={params.value}
//         alt={params.value}
//         style={{ width: 40, borderRadius: '50%' }}
//       />
//     ),
//   },
//   { field: 'username', headerName: 'Username', width: 130},
//   { field: 'email', headerName: 'Email', width: 130},
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'phone',
//     headerName: 'Phone',
//     type: 'text',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, avatar: 'https://i.pravatar.cc/150?img=1', username: 'Snow', email: 'jonsnow@gmail.com', firstName: 'Snow', lastName: 'Jon', phone: '0734560088' },  
//   { id: 2, avatar: 'https://i.pravatar.cc/150?img=2', username: 'Lannister', email: 'cerseilannister@gmail.com', firstName: 'Lannister', lastName: 'Cersei', phone: '073456789' },
//   { id: 3, avatar: 'https://i.pravatar.cc/150?img=3', username: 'Lannister', email: 'Jaime@gmail.com', firstName: 'Lannister', lastName: 'Jaime', phone: '0712345670' },
//   { id: 4, avatar: 'https://i.pravatar.cc/150?img=4', username: 'Stark', email: 'Arya@gmail.com', firstName: 'Stark', lastName: 'Arya', phone: '0723458967' },
//   { id: 5, avatar: 'https://i.pravatar.cc/150?img=5', username: 'Targaryen', email: 'Daenerys@gmail.com', firstName: 'Targaryen', lastName: 'Daenerys', phone: '0756456789' },
//   { id: 6, avatar: 'https://i.pravatar.cc/150?img=6', username: 'Melisandre', email: 'Snow@gmail.com', firstName: 'Melisandre', lastName: 'Snow', phone: '0723456789' },
//   { id: 7, avatar: 'https://i.pravatar.cc/150?img=7', username: 'Clifford', email: 'Ferrara@gmail.com', firstName: 'Clifford', lastName: 'Ferrara', phone: '0712345678' },
//   { id: 8, avatar: 'https://i.pravatar.cc/150?img=8', username: 'Frances', email: 'Rossini@gmail.com', firstName: 'Frances', lastName: 'Rossini', phone: '0723445789' },
//   { id: 9, avatar: 'https://i.pravatar.cc/150?img=9', username: 'Roxie', email: 'Harvey@gmail.com', firstName: 'Roxie', lastName: 'Harvey', phone: '0726756789' },
//   { id: 10, avatar: 'https://i.pravatar.cc/150?img=10', username: 'Snow', email: 'Jon@gmail.com', firstName: 'Snow', lastName: 'Jon', phone: '123456789' },
//   { id: 11, avatar: 'https://i.pravatar.cc/150?img=11', username: 'Lannister', email: 'Cersei@gmail.com', firstName: 'Lannister', lastName: 'Cersei', phone: '0734567829' },
//   { id: 12, avatar: 'https://i.pravatar.cc/150?img=12', username: 'Lannister', email: 'Jaime@gmail.com', firstName: 'Lannister', lastName: 'Jaime', phone: '0754326789' },
//   { id: 13, avatar: 'https://i.pravatar.cc/150?img=13', username: 'Stark', email: 'Arya@gmail.com', firstName: 'Stark', lastName: 'Arya', phone: '123456789' },
//   { id: 14, avatar: 'https://i.pravatar.cc/150?img=14', username: 'Targaryen', email: 'Daenerys@gmail.com', firstName: 'Targaryen', lastName: 'Daenerys', phone: '123456789' },
//   { id: 15, avatar: 'https://i.pravatar.cc/150?img=15', username: 'Melisandre', email: 'Snow@gmail.com', firstName: 'Melisandre', lastName: 'Snow', phone: '123456789' },
//   { id: 16, avatar: 'https://i.pravatar.cc/150?img=16', username: 'Clifford', email: 'Ferrara@gmail.com', firstName: 'Clifford', lastName: 'Ferrara', phone: '123456789' },
//   { id: 17, avatar: 'https://i.pravatar.cc/150?img=17', username: 'Frances', email: 'Rossini@gmail.com', firstName: 'Frances', lastName: 'Rossini', phone: '123456789' },
//   { id: 18, avatar: 'https://i.pravatar.cc/150?img=18', username: 'Roxie', email: 'Harvey@gmail.com', firstName: 'Roxie', lastName: 'Harvey', phone: '123456789' },
//   { id: 19, avatar: 'https://i.pravatar.cc/150?img=19', username: 'Snow', email: 'Jon@gmail.com', firstName: 'Snow', lastName: 'Jon', phone: '123456789' },
//   { id: 20, avatar: 'https://i.pravatar.cc/150?img=20', username: 'Lannister', email: 'Cersei@gmail.com', firstName: 'Lannister', lastName: 'Cersei', phone: '123456789' },

// ];