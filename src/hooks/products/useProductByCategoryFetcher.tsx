import { useEffect, useState } from "react";
import { fetchProductByCategory } from "../../api/productsFetch";

export const useProductByCategoryFetcher = (
  limit: number,
  category: string
) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetchProductByCategory(limit, category).then((data) => {
      setProduct(data);
    });
  }, []);
  return product;
};
