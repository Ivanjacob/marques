/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Header from "./Header.js";
import useAxios from "../utils/useAxios";
import jwt_decode from "jwt-decode";
import axios from "axios";

function Profiles() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);
  const [usersData, setUsersData] = useState([]);

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

  console.log(usersData);

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
    { field: "username", headerName: "Username", width: 200 },
    { field: "email", headerName: "Email", width: 300 },
  ];

  const toolbarOptions = ["Search"];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div
      style={{
        margin: "2rem",
        marginTop: "6rem",
        padding: "0.5rem",
        backgroundColor: "#fff",
        borderRadius: "1.5rem",
      }}
    >
      <Header category="Page" title="Users" />
      {loading ? (
        <p>Loading...</p>
      ) : (
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

export default Profiles;
