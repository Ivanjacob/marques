/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../utils/stockAxios";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import EditIcon from "@mui/icons-material/Edit";
import { blue } from "@mui/material/colors";
import { red } from "@mui/material/colors";

import swal from "sweetalert2";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

import { Tooltip } from "@mui/material";

import Header from "../views/Header.js";
import Button from "../views/Button.js";
import Buttons from "./Buttons.jsx";

function Product() {
  // CommonJS
  const Swal = require("sweetalert2");
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [productsData, setProductsData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchProducts();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product data", error);
      }
    }
    fetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "image",
      headerName: "Image",
      width: 130,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="Product"
          style={{
            //width: 50,
            //height: 50,
            //borderRadius: '50%',
            borderRadius: "30px", // Equivalent to rounded-xl
            padding: "18px 0", // Equivalent to py-2 px-0
            height: "100px", // Equivalent to h-20
            marginLeft: "0.75rem", // Equivalent to md:ml-3
            width: "5rem", // Equivalent to w-20
          }}
        />
      ),
    },
    { field: "name", headerName: "Name", width: 170 },
    { field: "category", headerName: "Category", width: 170 },
    { field: "description", headerName: "Description", width: 130 },
    {
      field: "price",
      headerName: "Price",
      width: 130,
      valueGetter: (params) => `KSh. ${params.value}`,
    }, // ValueGetter is used to add KSh. sign to price
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <div>
          <Tooltip title="Edit">
            <EditIcon
              style={{ marginLeft: "0.5rem", cursor: "pointer" }}
              sx={{ color: blue[600], fontSize: 25 }}
              onClick={() => handleEditClick(params.row.id)}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <DeleteRoundedIcon
              style={{ marginLeft: "0.5rem", cursor: "pointer" }}
              sx={{ color: red[600], fontSize: 25 }}
              onClick={() => handleDeleteClick(params.row.id)}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  const handleEditClick = (id) => {
    navigate(`/inventory/edit-product/${id}`);
  };

  const handleDeleteClick = async (id) => {
    const swalWithBootsrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success swal-buttons-space",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: true,
    });

    swalWithBootsrapButtons
      .fire({
        title: "Are you sure?",
        text: "You want to delete this Product?!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",

        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            await deleteProduct(id);
            const response = await fetchProducts();
            setProducts(response.data);

            swalWithBootsrapButtons.fire(
              "Deleted!",
              "Product deleted.",
              "success"
            );
          } catch (error) {
            console.error("Error deleting product", error);
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootsrapButtons.fire(
            "Cancelled",
            "Product not deleted",
            "error"
          );
        }
      });
  };

  const toolbarOptions = ["search"];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div
      style={{
        margin: "2rem",
        marginTop: "2rem",
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
        <Header category="Page" title="Products" />
        <Button buttonText="Add Product" to="/inventory/add-product" />
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
  );
}

export default Product;
