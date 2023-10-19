/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Component } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  fetchStockById,
  fetchProductName,
  updateStock,
} from "../utils/stockAxios";
import swal from "sweetalert2";
import jwt_decode from "jwt-decode";

import Header from "../views/Header.js";
import Button from "../views/Button.js";

import Buttons from "./Buttons.jsx";

function InputField({ label, name, value, type, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <input
        className="form-control"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function IssueProduct() {
  const token = localStorage.getItem("authTokens");
  const navigate = useNavigate();

  if (token) {
    const decode = jwt_decode(token);
    var username = decode.username;
  }

  const { id } = useParams();
  const [issue_stock, setIssueStock] = useState(0);
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [issueTo, setIssueTo] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchStockById(id);
        console.log(response.data);
        const currentStock = response.data;

        setProductName(currentStock.product_name);
        setIssueStock(currentStock.quantity_in_stock);
      } catch (error) {
        console.error("Error issueing product:", error);
      }
    }
    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIssueStock(value);
  };
  const handleIssueToChange = (e) => {
    const { value } = e.target;
    setIssueTo(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await fetchStockById(id);
    //   const currentStock = response.data;
    //   const newQuantityInStock =
    //     parseInt(currentStock.quantity_in_stock) - parseInt(issue_stock);

    //   const updatedStockData = {
    //     ...currentStock,
    //     quantity_in_stock: newQuantityInStock,
    //     //issue_to: issueTo, // Include the issueTo value in the updated stock data
    //   };

    //   await updateStock(id, updatedStockData);

    //   // Redirect back to the RiceStockList page
    //   navigate("/inventory");
    // } catch (error) {
    //   console.error("Error issueing product:", error);
    //   swal.fire({
    //     title: "Invalid.",
    //     text: "Error issueing product",
    //     icon: "error",
    //     toast: true,
    //     timer: 3000,
    //     position: "top",
    //     timerProgressBar: true,
    //     showConfirmButton: false,
    //   });
    // }
    try {
      const response = await fetchStockById(id);
      const currentStock = response.data;
      const issuedQuantity = parseInt(issue_stock);

      if (
        issuedQuantity > currentStock.quantity_in_stock ||
        issuedQuantity < 0
      ) {
        swal.fire({
          title: "Invalid quantity to issue.",
          text: "You can't issue more than the quantity in stock or issue a negative quantity.",
          icon: "error",
          toast: true,
          timer: 3000,
          position: "top",
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } else {
        const newQuantityInStock =
          parseInt(currentStock.quantity_in_stock) - issuedQuantity;

        const updatedStockData = {
          ...currentStock,
          quantity_in_stock: newQuantityInStock,
          // issue_to: issueTo, // Include the issueTo value in the updated stock data
        };
        await updateStock(id, updatedStockData);

        swal.fire({
          title: "Success.",
          text: "Product issued successfully",
          icon: "success",
          toast: true,
          timer: 3000,
          position: "top",
          timerProgressBar: true,
          showConfirmButton: false,
        });

        // Redirect back to the RiceStockList page
        navigate("/inventory");
      }
    } catch (error) {
      console.error("Error receiving product:", error);
    }
  };

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
        <Header category="Page" title="Issue Product" />
        <Button buttonText="View Stock" to="/inventory" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="col-sm-7"
        style={{
          boxShadow: " 9px 15px 10px 0px rgba(0,125,125, 0.4)",
        }}
      >
        <p>
          <b>
            Product:{" "}
            <span style={{ color: "red", fontStyle: "italic" }}>
              {productName}
            </span>
          </b>
          <img
            src="https://img1.wsimg.com/isteam/ip/d0e5736f-1d23-476a-a37a-f536dea1b248/M.R.G-products-kenya-select-1-300x228-removebg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280"
            alt="Product "
          />
        </p>
        <br />
        <InputField
          type="number"
          label="Issue Quantity"
          name="receive_stock"
          value={issue_stock}
          onChange={handleInputChange}
        />
        <br />
        <p>
          <i>
            Issued By: <b>{username}</b>
          </i>
        </p>
        <div style={{ padding: "14px" }}>
          <Buttons buttonText="Issue Product" buttonType="submit" />
        </div>
      </form>
    </div>
  );
}
export default IssueProduct;
