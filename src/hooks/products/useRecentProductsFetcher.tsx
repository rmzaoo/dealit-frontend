import { useEffect, useState } from "react";
import { fetchRecentProducts } from "../../api/productsFetch";

export const useRecentProductsFetcher = (size: number) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetchRecentProducts(size).then((data) => {
      setProduct(data);
    });
  }, []);
  return product;
};
