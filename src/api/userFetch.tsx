import axios from "axios";

const baseUrl = "https://dealit-backend.herokuapp.com/dealit/api";

export const fetchUserById = async (id: number) => {
  return await axios.get(`${baseUrl}/users/${id}`).then((response: any) => {
    return response.data;
  });
};
