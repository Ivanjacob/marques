import axios from 'axios';
const BaseURL = "http://192.168.88.253:8000/ricemart/"

const productAxios = axios.create({});

// fetch products data
export const fetchProducts = () => productAxios.get(`${BaseURL}product/`);
// fetch product by id
export const fetchProductById = (id) =>
  productAxios.get(`${BaseURL}product/${id}/`);
// create a new product entry
export const createProduct = (newProduct) => {
  const formData = new FormData();
  formData.append("name", newProduct.name);
  formData.append("category", newProduct.category);
  formData.append("image", newProduct.image);
  formData.append("description", newProduct.description);
  formData.append("price", newProduct.price);

  return productAxios.post(`${BaseURL}product/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}; //productAxios.post(`${BaseURL}product/`, newProduct);
// update a product entry by ID
export const updateProduct = (id, updatedProduct) =>
  productAxios.put(`${BaseURL}product/${id}/`, updatedProduct);
// delete a product entry by ID
export const deleteProduct = (id) =>
  productAxios.delete(`${BaseURL}product/${id}/`);


export default productAxios;

