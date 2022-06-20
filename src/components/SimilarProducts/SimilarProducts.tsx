import React, { useState } from "react";
import { useMainCategoryBySubFetcher } from "../../hooks/categories/useMainCategoryBySubFetcher";
import { useProductByCategoryFetcher } from "../../hooks/products/useProductByCategoryFetcher";
import { ProductProps } from "../Product/Product";
import ProductListing from "../ProductListing/ProductListing";

interface Props {
  subCategory: string;
  product: ProductProps;
}

const SimilarProducts = ({ subCategory, product }: Props) => {
  const [filteredProducts, setFilteredProduct] = useState<ProductProps[]>();
  const mainCat = useMainCategoryBySubFetcher(subCategory)?.main.name;
  const mainProducts: ProductProps[] = useProductByCategoryFetcher(
    10,
    subCategory
  ) || [{ id: 0, name: "Loading...", photos: [""], price: 0 }];

  return (
    <ProductListing
      oneColumn={true}
      products={mainProducts.filter((val) => val.name !== product.name)}
    />
  );
};

export default SimilarProducts;
