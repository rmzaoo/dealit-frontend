import { useEffect, useState } from "react";
import { fetchProductByCategoryPerPage } from "../../api/productsFetch";

export const useProductByCategoryPerPageFetcher = (
  page: number,
  category: string | null
) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetchProductByCategoryPerPage(page, category).then((data) => {
      setProduct(data);
    });
  }, []);
  return product;
};
