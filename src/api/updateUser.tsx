import axios from "axios";

const baseUrl = "https://dealit-backend.herokuapp.com/dealit/api";

export const updateUsername = async (
  id: number,
  valToUpdate: string,
  jwt: string
) => {
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": jwt || "null",
  };

  const val = { username: valToUpdate };
  const response = await axios
    .patch(`${baseUrl}/users/${id}`, val, {
      headers,
    })
    .catch((err) => console.error(err));
  return response!.data;
};
