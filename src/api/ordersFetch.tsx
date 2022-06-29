import axios from "axios";

const baseUrl = "https://dealit-backend.herokuapp.com/dealit/api";

export const fetchOrdersByUserId = async (userId: number, jwt: string) => {
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": jwt || "null",
  };

  const response = await axios
    .get(`${baseUrl}/orders/user/${userId}`, { headers })
    .catch((error: any) => {
      console.error(error);
    });
  return response!.data;
};
