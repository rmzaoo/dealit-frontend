import axios from "axios";

const baseURL = "http://10.10.225.129:3220/dealit/api";
const localUrl = "http://localhost:3220/dealit/api";

export const fetchRandomProduct = (size: number) => {
  return axios
    .get(`${baseURL}/products/random?size=${size}`)
    .then((response: any) => {
      return response.data;
    });
};

export const fetchAllProducts = (limit: number) => {
  return axios
    .get(`${baseURL}/products?limit=${limit}`)
    .then((response: any) => {
      return response.data;
    });
};

export const fetchProductByCategory = (limit: number, category: string) => {
  return axios
    .get(`${baseURL}/products/category/${category}?limit=${limit}`)
    .then((response: any) => {
      return response.data;
    });
};

export const fetchCategories = () => {
  return [
    "Electronics",
    "Clothing",
    "Automotive",
    "Kitchen",
    "Outdoor",
    "Gaming",
  ];
};

export const fetchProductById = (id: number) => {
  return axios.get(`${baseURL}/products/${id}`).then((response: any) => {
    return response.data;
  });
};
