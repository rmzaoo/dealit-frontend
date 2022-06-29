import axios from "axios";

const baseUrl = "https://dealit-backend.herokuapp.com/dealit/api";

export const fetchAddressesByUserId = async (userId: string, jwt: string) => {
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": jwt || "null",
  };

  return await axios
    .get(`${baseUrl}/addresses/user/${userId}`)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      throw new Error(error);
    });
};
