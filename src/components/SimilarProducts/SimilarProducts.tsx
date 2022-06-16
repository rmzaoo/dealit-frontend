import React, { useState } from "react";
import { useMainCategoryBySubFetcher } from "../../hooks/categories/useMainCategoryBySubFetcher";
import { useProductByCategoryFetcher } from "../../hooks/products/useProductByCategoryFetcher";
import { ProductProps } from "../Product/Product";
import ProductListing from "../ProductListing/ProductListing";

interface Props {
  product: ProductProps;
  subCategory: string;
}

const SimilarProducts = ({ subCategory, product }: Props) => {
  const mainCat = useMainCategoryBySubFetcher(subCategory)?.main.name;
  const mainProducts: ProductProps[] = useProductByCategoryFetcher(
    10,
    subCategory
  ) || [{ id: 0, name: "Loading...", photos: [""], price: 0 }];

  console.log(mainProducts);
  return <ProductListing oneColumn={true} products={mainProducts} />;
};

export default SimilarProducts;
