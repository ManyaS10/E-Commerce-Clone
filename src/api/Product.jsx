import axios from "axios";
const BASE_URL = "https://api.escuelajs.co/api/v1";

export const getProducts = () => axios.get(`${BASE_URL}/products`);
export const getProductById = (id) => axios.get(`${BASE_URL}/products/${id}`);
