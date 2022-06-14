import axios from "axios";

const baseURL = "http://10.10.225.145:3220/dealit/api";
const localUrl = "http://localhost:3220/dealit/api";

export const fetchUserById = (id: number) => {
  return axios.get(`${baseURL}/users/${id}`).then((response: any) => {
    return response.data;
  });
};
