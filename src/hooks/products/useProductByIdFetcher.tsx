import { useEffect, useState } from "react";
import { fetchProductById } from "../../api/productsFetch";

export interface ProductDetailsProp {
  id: number;
  name: string;
  userId: number;
  description: string;
  categoryName: string;
  photos: string[];
  price: number;
}

export const useProductByIdFetcher = (id: number) => {
  const [product, setProduct] = useState<ProductDetailsProp>();
  useEffect(() => {
    fetchProductById(id).then((data) => {
      setProduct(data);
    });
  }, []);
  return product;
};
