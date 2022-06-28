import axios from "axios";
import { MdPhotoSizeSelectActual } from "react-icons/md";

const baseUrl = "https://dealit-backend.herokuapp.com/dealit/api";

export const fetchRandomProduct = async (limit: number) => {
  const response = await axios.get(`${baseUrl}/products/random?limit=${limit}`);
  return response.data;
};

export const fetchAllProducts = async (limit: number) => {
  const response = await axios.get(`${baseUrl}/products?limit=${limit}`);
  return response.data;
};

export const fetchProductByCategory = async (
  limit: number,
  category: string
) => {
  const response = await axios.get(
    `${baseUrl}/products/category/${category}?limit=${limit}`
  );
  return response.data;
};
export const fetchProductByCategoryWithoutLimit = async (category: string) => {
  const response = await axios.get(`${baseUrl}/products/category/${category}`);
  return response.data;
};
export const fetchProductByCategoryPerPage = async (
  page: number,
  category: string | null
) => {
  const response = await axios.get(
    `${baseUrl}/products/category/${category}?page=${page}`
  );
  return response.data;
};

export const fetchProductById = async (id: number) => {
  const response = await axios.get(`${baseUrl}/products/${id}`);
  return response.data;
};

export const fetchRecentProducts = async (limit: number) => {
  const response = await axios.get(
    `${baseUrl}/products/latest/?limit=${limit}`
  );
  return response.data;
};

export interface PostProductProps {
  name: string;
  description: string;
  category: string;
  photos: string[];
  price: number;
  userId: number;
  jwt: string;
}

export const PostProduct = async (Product: PostProductProps) => {
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": Product.jwt || "null",
  };
  const body = { ...Product, jwt: null };
  const response = await axios.post(`${baseUrl}/products`, body, {
    headers,
  });
  return response.data;
};
