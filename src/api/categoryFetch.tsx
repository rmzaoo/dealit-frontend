import axios from "axios";

const baseUrl = "http://localhost:3220/dealit/api";

export const fetchMainCategory = async (subCategory: string) => {
  const response = await axios
        .get(`${baseUrl}/categories/${subCategory}`);
    return response.data;
};
