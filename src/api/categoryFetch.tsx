import axios from "axios";

const baseUrl = "https://dealit-backend.herokuapp.com/dealit/api";

export const fetchMainCategory = async (subCategory: string) => {
  const response = await axios.get(`${baseUrl}/categories/${subCategory}`);
  console.log(response.data);
  return response.data;
};
