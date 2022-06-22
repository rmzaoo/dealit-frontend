import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../api/productsFetch";

export const useAllProductsFetcher = (limit: number) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetchAllProducts(limit).then((data) => {
      setProduct(data);
    });
  }, []);
  return product;
};
