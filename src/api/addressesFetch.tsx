import axios from "axios";

const baseUrl = "https://dealit-backend.herokuapp.com/dealit/api";

export const fetchAddressesByUserId = async (userId: string) => {
  const res = await axios.get(`${baseUrl}/addresses/user/${userId}`);
  return res.data;
};
