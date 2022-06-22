import axios from "axios";

const baseUrl = "https://dealit-backend.herokuapp.com/dealit/api";

export const fetchlogin = async (email: string, password: string) => {
  const body = {
    email: email,
    password: password,
  };

  const response = await axios
    .post(`${baseUrl}/login`, body)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      throw error;
    });
  return response;
};

export const fetchregister = async (user: any) => {
  const body = {
    username: user.name,
    address: {
      country: user.country,
      city: user.city,
      zipCode: user.zipCode,
      street: user.street,
      houseNumber: user.houseNumber,
    },
    phone: user.phone,
    email: user.email,
    password: user.password,
  };

  const response = await axios.post(`${baseUrl}/register`, body);
  return response.data;
};
