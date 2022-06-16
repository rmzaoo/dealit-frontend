import axios from "axios";

const baseURL = "http://10.10.225.129:3220/dealit/api";
const localUrl = "http://localhost:3220/dealit/api";

export const fetchUserById = async (id: number) => {
  return await axios.get(`${localUrl}/users/${id}`).then((response: any) => {
    return response.data;
  });
};
