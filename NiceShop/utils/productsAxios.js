import axios from 'axios';
const BaseURL = "http://127.0.0.1:8000/ricemart/"
const cartEndpoint = `${BaseURL}cart/`

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

// add to cart
export const addToCart = async (productData) => {
  try {
    const response = await axios.post(cartEndpoint, productData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('Received response:', response)
    console.log('Added to cart:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error; // Propagate the error to handle it in your app
  }
};


export default productAxios;

// Function to add a product to the cart
// export const addToCart = async (productId, quantity) => {
//   const cartUrl = `${BaseURL}cart/`;
//   try {
//     const response = await productAxios.post(
//       cartUrl,
//       {
//         product: productId,
//         quantity: quantity,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     if (!response.ok){
//       throw new Error("Could not add to cart");
//     }

//     // Item added successfully
//     // You can handle the response or perform further actions if needed
//     return response.data;
//   } catch (error) {
//     console.error('Error adding item to cart:', error);
//     throw error; // Propagate the error to handle it in your app
//   }
// };

// export const addToCart = (productData) => {
//   return axios.post(cartEndpoint, productData);
//     .then(response => {
//       console.log('Added to cart:', response.data);
//       return response.data;
//     })
//     .catch(error => {
//       console.error('Error adding item to cart:', error);
//       throw error; // Propagate the error to handle it in your app
//     });
// }