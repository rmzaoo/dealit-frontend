import axios from "axios";

const baseURL = "http://10.10.225.145:3220";

export const fetchRandomProduct = (size: number) => {
  return axios.get(`${baseURL}/products/random?size=${size}`).then((response: any) => {
    return response.data;
  });
};


