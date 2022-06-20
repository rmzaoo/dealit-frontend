import axios from "axios";

const baseUrl = "https://dealit-backend.herokuapp.com/dealit/api";



export const fetchUserById = async (id: number) => {
  return await axios.get(`${baseUrl}/users/${id}`).then((response: any) => {
    return response.data;
  });
};

export const fetchUser = async (jwt: string) => {
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": jwt || "null"
  };
  return await axios
    .get(`${baseUrl}/users`, { headers })
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      throw new Error(error);
    });
};
