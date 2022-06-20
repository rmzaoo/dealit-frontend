import { useEffect, useState } from "react";
import { fetchRandomProduct } from "../../api/fetch/productsFetch";

export const useRandomProductFetcher = (size: number) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetchRandomProduct(size).then((data) => {
      setProduct(data);
    });
  }, []);
  return product;
};