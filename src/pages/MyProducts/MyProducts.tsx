import React, { useLayoutEffect, useState } from "react";
import MyProductComp from "../../components/MyProductComp/MyProductComp";
import {
  MyProductsPageContainer,
  MyProductsTitleContainer,
  ProductsContainer,
} from "./style";
import { useSelector } from "react-redux";
import { fetchProductByUserId } from "../../api/productsFetch";
import { InitialStateProps } from "../AccountSettingsPage/AccountSettingsPage";
import { ProductDetailsProp } from "../PDP/PDP";

const MyProducts = () => {
  const user = useSelector((state: InitialStateProps) => state.user);
  const [productsSelling, setProductsSelling] = useState<any>();

  useLayoutEffect(() => {
    fetchProductByUserId(user.id).then((data) => {
      setProductsSelling(data);
    });
  }, []);

  console.log(productsSelling);
  if (productsSelling) {
    if (productsSelling.length > 0) {
      return (
        <MyProductsPageContainer>
          <MyProductsTitleContainer>
            <h2>My Products</h2>
          </MyProductsTitleContainer>
          <ProductsContainer>
            {productsSelling.map((value: ProductDetailsProp, key: any) => {
              return <MyProductComp product={value} />;
            })}
          </ProductsContainer>
        </MyProductsPageContainer>
      );
    }
  } else {
    return null;
  }
};

export default MyProducts;
