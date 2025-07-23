import axios from "axios";

const BASE_URL = "https://api.escuelajs.co/api/v1";

// ✅ Get all products
export const getProducts = () => axios.get(`${BASE_URL}/products`);

// ✅ Get product by ID
export const getProductById = (id) => axios.get(`${BASE_URL}/products/${id}`);

// ✅ Get products by category ID
export const getProductsByCategory = (id) =>
  axios.get(`${BASE_URL}/products/?categoryId=${id}`);
