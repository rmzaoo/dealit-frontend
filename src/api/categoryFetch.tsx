import axios from "axios";

const baseUrl = "https://dealit-backend.herokuapp.com/dealit/api";

export const fetchMainCategory = async (subCategory: string) => {
  const response = await axios.get(`${baseUrl}/categories/${subCategory}`);
  return response.data;
};

export const fetchCategories = async () => {
  const response = await axios.get(`${baseUrl}/categories`);
  return response.data;
};