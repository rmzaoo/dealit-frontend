import axios from "axios";

const baseURL = "http://10.10.225.129:3220/dealit/api";
const localUrl = "http://localhost:3220/dealit/api";

export const fetchMainCategory = async (subCategory: string) => {
  const response = await axios
        .get(`${localUrl}/categories/${subCategory}`);
    return response.data;
};
