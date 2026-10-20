import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

export const getAllProducts = async () => {
  const response = await axios.get(`${BACKEND_URL}/products`);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${BACKEND_URL}/products/${id}`);
  return response.data;
};

export const createProduct = async (productData) => {
  const response = await axios.post(`${BACKEND_URL}/products`, productData);
  return response.data;
};

export const updateProduct = async (id, productData) => {
  const response = await axios.put(
    `${BACKEND_URL}/products/${id}`,
    productData,
  );
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${BACKEND_URL}/products/${id}`);
  return response.data;
};
