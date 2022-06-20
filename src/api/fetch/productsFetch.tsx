import axios from "axios";

const baseUrl = "https://dealit-backend.herokuapp.com/dealit/api";

export const fetchRandomProduct = (limit: number) => {
  return axios
    .get(`${baseUrl}/products/random?limit=${limit}`)
    .then((response: any) => {
      return response.data;
    });
};

export const fetchAllProducts = (limit: number) => {
  return axios
    .get(`${baseUrl}/products?limit=${limit}`)
    .then((response: any) => {
      return response.data;
    });
};

export const fetchProductByCategory = (limit: number, category: string) => {
  return axios
    .get(`${baseUrl}/products/category/${category}?limit=${limit}`)
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
  return axios.get(`${baseUrl}/products/${id}`).then((response: any) => {
    return response.data;
  });
};
