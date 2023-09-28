// import React, { useState } from 'react';
// import { createRiceStock } from '../utils/stockAxios';

// function AddRiceStock() {
//   const [formData, setFormData] = useState({
//     category: '',
//     item_name: '',
//     quantity: '',
//     receive_quantity: '',
//     receive_by: '',
//     issue_quantity: '',
//     issue_by: '',
//     issue_to: '',
//     phone_number: '',
//     created_by: '',
//     reorder_level: '',
//     export_to_CSV: false,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createRiceStock(formData);
//       // Clear the form after successfully creating a rice stock entry
//       setFormData({
//         category: '',
//         item_name: '',
//         quantity: '',
//         receive_quantity: '',
//         receive_by: '',
//         issue_quantity: '',
//         issue_by: '',
//         issue_to: '',
//         phone_number: '',
//         created_by: '',
//         reorder_level: '',
//         export_to_CSV: false,
//       });
//     } catch (error) {
//       console.error('Error creating rice stock:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Add New Rice Stock</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Add form input fields for all rice stock properties */}
//         <div>
//           <label htmlFor="category">Category:</label>
//           <input
//             type="text"
//             name="category"
//             value={formData.category}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="item_name">Item Name:</label>
//           <input
//             type="text"
//             name="item_name"
//             value={formData.item_name}
//             onChange={handleInputChange}
//           />
//         </div>
//         {/* Add more input fields for other properties */}
//         <div>
//           <button type="submit">Create Rice Stock</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddRiceStock;
/* elsint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { createRiceStock } from "../utils/stockAxios";

import axios from 'axios';

import Header from '../views/Header.js';
import Button from '../views/Button.js';

import Buttons from './Buttons.jsx';

function InputField({ label, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <input 
        className="form-control"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function AddRiceStock() {
  const initialFormData = {
    category: "",
    item_name: "",
    quantity: "",
    receive_quantity: "",
    receive_by: "",
    issue_quantity: "",
    issue_by: "",
    issue_to: "",
    phone_number: "",
    created_by: "",
    reorder_level: "",
    export_to_CSV: false,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRiceStock(formData);
      // Clear the form after successfully creating a rice stock entry
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error creating rice stock:", error);
    }
  };

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
      axios.get('http://localhost:8000/ricemart/categories/')
          .then((response) => {
              setCategories(response.data);
          })
          .catch((error) => {
              console.error('Error fetching categories:', error);
          });
  }, []);
  
  const handleSelectCategory = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
    setFormData({ ...formData, category: selectedValue });
  };
  
  
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
        <Header category="Page" title="Add Rice Stock" />
        <Button buttonText="View Rice Stock" to="/inventory" />
      </div>
      <form 
        onSubmit={handleSubmit}
        className="col-sm-7"
      >
        <div>
        <label htmlFor="category">Category:</label> 
          <select className="form-control"
              name="category"
              value={selectedCategory}
              onChange={handleSelectCategory}
          >
              <option value=""></option>
              {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                      {category.name}
                  </option>
              ))}
          </select>
        </div>

        <InputField label="Item Name" name="item_name" value={formData.item_name} onChange={handleInputChange} />
        <InputField label="Quantity" name="quantity" value={formData.quantity} onChange={handleInputChange} />
        <InputField label="Receive Quantity" name="receive_quantity" value={formData.receive_quantity} onChange={handleInputChange} />
        <InputField label="Receive By" name="receive_by" value={formData.receive_by} onChange={handleInputChange} />
        <InputField label="Issue Quantity" name="issue_quantity" value={formData.issue_quantity} onChange={handleInputChange} />
        <InputField label="Issue By" name="issue_by" value={formData.issue_by} onChange={handleInputChange} />
        <InputField label="Issue To" name="issue_to" value={formData.issue_to} onChange={handleInputChange} />
        <InputField label="Phone Number" name="phone_number" value={formData.phone_number} onChange={handleInputChange} />
        <InputField label="Created By" name="created_by" value={formData.created_by} onChange={handleInputChange} />
        <InputField label="Reorder Level" name="reorder_level" value={formData.reorder_level} onChange={handleInputChange} />
        <div>
          <label htmlFor="export_to_CSV" >Export to CSV:</label>
          <input
            type="checkbox"
            name="export_to_CSV"
            checked={formData.export_to_CSV}
            onChange={(e) => setFormData({ ...formData, export_to_CSV: e.target.checked })}
          />
        </div>
        <div style = {{ padding: "14px" }}>
          <Buttons 
            buttonText = "Create Rice Stock" 
            buttonType = "submit"
          />
        </div>
      </form>
    </div>
  )

}
export default AddRiceStock;