import { useEffect, useState } from "react";
import { fetchProductByCategory } from "../../api/productsFetch";

export const useProductByCategoryPerPageFetcher = (page: number, category: string) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetchProductByCategory(page, category).then((data) => {
      setProduct(data);
    });
  }, []);
  return product;
};