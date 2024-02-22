/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Header from "./Header.js";
import useAxios from "../utils/useAxios";

import jwt_decode from "jwt-decode";
import axios from "axios";

import CircleIcon from '@mui/icons-material/Circle';


function Users() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);
  const [usersData, setUsersData] = useState([]);
  const [users, setUsers] = useState([]);
  
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  
  const filteredUsersData = usersData.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/users/")
      .then((response) => {
        setUsersData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleVerify = (id) => {
    const updatedUsersData = usersData.map((user) => {
      if (user.id === id) {
        return { ...user, verify: !user.verify };
      }
      return user;
    })
    setUsersData(updatedUsersData);
  };
  
  const handleVerifyClick = (userId) => {
    axios
    .put(`http://127.0.0.1:8000/api/users/${userId}/update-verify-status/`, { verify: true})
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error updating verify status:", error);
    })
  }

  const columns = [
    //{ field: 'id', headerName: 'ID', width: 70 },
    {
      field: "profile_image",
      headerName: "Image",
      width: 130,
      renderCell: (params) => (
        <div>
          <img
            style={{
              borderRadius: "100%", // Equivalent to rounded-xl
              padding: "18px 0", // Equivalent to py-2 px-0
              height: "80px", // Equivalent to h-20
              marginLeft: "0.75rem", // Equivalent to md:ml-3
              width: "3rem", // Equivalent to w-20
            }}
            src={params.value}
            alt="Profile"
          />
        </div>
      ),
    },
    { field: "username", headerName: "Username", width: 120 },
    { field: "email", headerName: "Email", width: 180 },
    {
      field: "action",
      headerName: "Actions",
      width: 80,
      renderCell: (params) => (
        <div>
          <button 
            onClick={() => handleVerifyClick(params.id)}
            style={{
              borderRadius: "40%",
              padding: "2px 4px",
              backgroundColor: params.row.verify ? "grey" : "#FEC90F",
              color: "black",
              fontSize: "12px",
              fontStyle: "Italic",
              outLine: "none",
            }}
          >
            verify
          </button>
        </div>
      ),
    },
    {
      field: "verify",
      headerName: "Status",
      width: 120,
      //valueGetter: (params) => (params.row.verify ? "Active" : "Inactive"),
      renderCell: (params) => (
        <div style={{ display: 'flex'}}>
            <div>
                {params.row.verify ?  <CircleIcon style={{ color: '#8BE78B', fontSize: '16px', marginRight: '8px' }}/> : <CircleIcon style={{ fontSize: '16px', color: 'red', marginRight: '8px' }}/>}
            </div>
            <div style={{ fontStyle: "italic" }}>
                {(params.row.verify ? "Verified" : "Unverified")}
            </div>
        </div>
    ),
    },
  ];
  

  const toolbarOptions = ["Search"];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div
      style={{
        margin: "2rem",
        marginTop: "3rem",
        padding: "0.5rem",
        backgroundColor: "#fff",
        borderRadius: "1.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2px",
          marginLeft: "6px",
          marginRight: "6px",
          position: "relative",
          alignItems: "center",
          background: "sky-blue",
        }}
      >
        <Header category="Page" title="Users" />
        <input
          type="text"
          placeholder="Search users"
          value={searchQuery}
          onChange={handleSearchChange}
        />  
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DataGrid
          rows={filteredUsersData}
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
          // checkboxSelection
        />
      )}
    </div>
  );
}

export default Users;

