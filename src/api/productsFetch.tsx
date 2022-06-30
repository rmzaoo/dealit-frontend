import axios from "axios";

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
  photos: File[];
  price: number;
  userId: string;
  jwt: string;
}

export const PostProduct = async (Product: PostProductProps) => {
  const { jwt, ...body } = Product;
  const formData = new FormData();

  formData.append("name", body.name);
  formData.append("description", body.description);
  formData.append("category", body.category);
  formData.append("price", body.price.toString());
  formData.append("userId", body.userId);

  body.photos.forEach((photo) => {
    formData.append("photos", photo);
  });

  const response = await axios({
    url: "https://dealit-backend.herokuapp.com/dealit/api/products",
    method: "post",
    headers: {
      "x-access-token": Product.jwt || "null",
    },
    data: formData,
  });

  return response.data;
};
