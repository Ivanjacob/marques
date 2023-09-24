import React, { useState } from 'react';
import { createRiceStock } from '../utils/stockAxios';

function AddRiceStock() {
  const [formData, setFormData] = useState({
    category: '',
    item_name: '',
    quantity: '',
    receive_quantity: '',
    receive_by: '',
    issue_quantity: '',
    issue_by: '',
    issue_to: '',
    phone_number: '',
    created_by: '',
    reorder_level: '',
    export_to_CSV: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRiceStock(formData);
      // Clear the form after successfully creating a rice stock entry
      setFormData({
        category: '',
        item_name: '',
        quantity: '',
        receive_quantity: '',
        receive_by: '',
        issue_quantity: '',
        issue_by: '',
        issue_to: '',
        phone_number: '',
        created_by: '',
        reorder_level: '',
        export_to_CSV: false,
      });
    } catch (error) {
      console.error('Error creating rice stock:', error);
    }
  };

  return (
    <div>
      <h2>Add New Rice Stock</h2>
      <form onSubmit={handleSubmit}>
        {/* Add form input fields for all rice stock properties */}
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="item_name">Item Name:</label>
          <input
            type="text"
            name="item_name"
            value={formData.item_name}
            onChange={handleInputChange}
          />
        </div>
        {/* Add more input fields for other properties */}
        <div>
          <button type="submit">Create Rice Stock</button>
        </div>
      </form>
    </div>
  );
}

export default AddRiceStock;
