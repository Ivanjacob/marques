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

import React, { useState } from "react";
import { createRiceStock } from "../utils/stockAxios";
import Header from "../views/Header";

// Reusable input component
function InputField({ label, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <input 
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
  
  
  return (
    <div>
      <Header category="Form" title="Add Rice Stock" />
      <form onSubmit={handleSubmit}>
        <InputField label="Category" name="category" value={formData.category} onChange={handleInputChange} />
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
        <div>
          <button type="submit" >Create Rice Stock</button>
        </div>
      </form>
    </div>
  )

}
export default AddRiceStock;