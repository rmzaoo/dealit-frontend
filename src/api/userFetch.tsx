import axios from "axios";

const baseUrl = "http://localhost:3220/dealit/api";

export const fetchUserById = async (id: number) => {
  return await axios.get(`${baseUrl}/users/${id}`).then((response: any) => {
    return response.data;
  });
};
