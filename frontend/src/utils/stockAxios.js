import axios from 'axios';

const baseURL = "http://127.0.0.1:8000/ricemart/";

const stockAxios = axios.create({});

// fetch rice stock data

export const fetchRiceStocks = () => stockAxios.get(`${baseURL}rice-stock/`);

// create a new rice stock entry

export const createRiceStock = (newRiceStock) => stockAxios.post(`${baseURL}rice-stock/`, newRiceStock);

// update a rice stock entry by ID

export const updateRiceStock = (id, updatedRiceStock) => stockAxios.put(`${baseURL}rice-stock/${id}/`, updatedRiceStock);

// delete a rice stock entry by ID

export const deleteRiceStock = (id) => stockAxios.delete(`${baseURL}rice-stock/${id}/`);

export default stockAxios;