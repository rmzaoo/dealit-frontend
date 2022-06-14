import axios from "axios";

const baseURL = "http://10.10.225.145:3220/dealit/api";
const localUrl = "http://localhost:3220/dealit/api";

export const fetchRandomProduct = (size: number) => {
  return axios
    .get(`${baseURL}/products/random?size=${size}`)
    .then((response: any) => {
      return response.data;
    });
};

export const fetchCategories = () => {
  return [
    "Eletronics",
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
