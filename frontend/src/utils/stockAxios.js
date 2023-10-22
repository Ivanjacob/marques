import axios from "axios";

const baseURL = "http://127.0.0.1:8000/ricemart/";
const baseURL2 = "http://127.0.0.1:8000/api/";

const stockAxios = axios.create({});

// fetch rice stock data
export const fetchRiceStocks = () => stockAxios.get(`${baseURL}rice-stock/`);
// create a new rice stock entry
export const createRiceStock = (newRiceStock) =>
  stockAxios.post(`${baseURL}rice-stock/`, newRiceStock);
// update a rice stock entry by ID
export const updateRiceStock = (id, updatedRiceStock) =>
  stockAxios.put(`${baseURL}rice-stock/${id}/`, updatedRiceStock);
// delete a rice stock entry by ID
export const deleteRiceStock = (id) =>
  stockAxios.delete(`${baseURL}rice-stock/${id}/`);

// fetch stock data
export const fetchStocks = () => stockAxios.get(`${baseURL}stock/`);
// fetch stock by id
export const fetchStockById = (id) => stockAxios.get(`${baseURL}stock/${id}/`);
// create a new stock entry
export const createStock = (newStock) =>
  stockAxios.post(`${baseURL}stock/`, newStock);
// update a stock entry by ID
export const updateStock = (id, updatedStock) =>
  stockAxios.put(`${baseURL}stock/${id}/`, updatedStock);
// delete a stock entry by ID
export const deleteStock = (id) => stockAxios.delete(`${baseURL}stock/${id}/`);

// fetch products data
export const fetchProducts = () => stockAxios.get(`${baseURL}product/`);
// fetch product by id
export const fetchProductById = (id) =>
  stockAxios.get(`${baseURL}product/${id}/`);
// create a new product entry
export const createProduct = (newProduct) => {
  const formData = new FormData();
  formData.append("name", newProduct.name);
  formData.append("category", newProduct.category);
  formData.append("image", newProduct.image);
  formData.append("description", newProduct.description);
  formData.append("price", newProduct.price);

  return stockAxios.post(`${baseURL}product/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}; //stockAxios.post(`${baseURL}product/`, newProduct);
// update a product entry by ID
export const updateProduct = (id, updatedProduct) =>
  stockAxios.put(`${baseURL}product/${id}/`, updatedProduct);
// delete a product entry by ID
export const deleteProduct = (id) =>
  stockAxios.delete(`${baseURL}product/${id}/`);

// ######## ORDERS ########
export const fetchOrders = () => stockAxios.get(`${baseURL}order/`);
export const fetchOrderById = (id) => stockAxios.get(`${baseURL}order/${id}/`);
export const createOrder = (newOrder) => {
  const formData = new FormData(); // Image, Item, customer, Total Amount, Status, OrderID, Location
  formData.append("image", newOrder.image);
  formData.append("item", newOrder.item);
  formData.append("customer", newOrder.customer);
  formData.append("total_amount", newOrder.total_amount);
  formData.append("status", newOrder.status);
  formData.append("orderId", newOrder.orderId);
  formData.append("address", newOrder.address);

  return stockAxios.post(`${baseURL}order/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
//stockAxios.post(`${baseURL}order/`, newProduct);
export const updateOrder = (id, updateOrder) =>
  stockAxios.put(`${baseURL}order/${id}/`, updateOrder);
export const deleteOrder = (id) => stockAxios.delete(`${baseURL}order/${id}/`);

// ######## CUSTOMERS ########
export const fetchCustomers = () => stockAxios.get(`${baseURL2}customers/`);
export const fecthCustomerById = (id) =>
  stockAxios.get(`${baseURL2}customers/${id}/`);
export const createCustomer = (newCustomer) => {
  const formData = new FormData();
  formData.append("profile_image", newCustomer.profile_image);
  formData.append("email", newCustomer.email);
  formData.append("phone", newCustomer.phone_number);
  formData.append("username", newCustomer.username);
  formData.append("first_name", newCustomer.first_name);
  formData.append("last_name", newCustomer.last_name);
  formData.append("status", newCustomer.status);
  formData.append("customer_id", newCustomer.customer_id);
  formData.append("city", newCustomer.city);
  formData.append("address", newCustomer.address);

  return stockAxios.post(`${baseURL2}customers/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}; //stockAxios.post(`${baseURL}customer/`, newCustomer);
export const updateCustomer = (id, updatedCustomer) =>
  stockAxios.put(`${baseURL2}customers/${id}/`, updatedCustomer);
export const deleteCustomer = (id) =>
  stockAxios.delete(`${baseURL2}customers/${id}/`);

// ######## FARMERS  ########
export const fetchFarmers = () => stockAxios.get(`${baseURL2}farmers/`);
export const fetchFarmerByID = (id) =>
  stockAxios.get(`${baseURL2}farmers/${id}/`);
export const createFarmer = (newFarmer) => {
  const formData = new FormData();
  formData.append("profile_image", newFarmer.profile_image);
  formData.append("email", newFarmer.email);
  formData.append("phone", newFarmer.phone_number);
  formData.append("username", newFarmer.username);
  formData.append("first_name", newFarmer.first_name);
  formData.append("last_name", newFarmer.last_name);
  formData.append("farmer_id", newFarmer.farmer_id);
  formData.append("rice_stored", newFarmer.rice_stored);

  return stockAxios.post(`${baseURL2}customers/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}; //stockAxios.post(`${baseURL}farmers/`, newFarmer);
export const updateFarmer = (id, updatedFarmer) =>
  stockAxios.put(`${baseURL2}farmers/${id}/`, updatedFarmer);
export const deleteFarmer = (id) =>
  stockAxios.delete(`${baseURL2}farmers/${id}/`);
// ######## USERS ########
export const fetchUsers = () => stockAxios.get(`${baseURL2}users/`);
export const fetchUserByID = (id) => stockAxios.get(`${baseURL2}users/${id}/`);
export const createUser = (newUser) => {
  const formData = new FormData();
  formData.append("profile_image", newUser.profile_image);
};
export default stockAxios;
