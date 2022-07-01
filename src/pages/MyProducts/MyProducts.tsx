import React, { useLayoutEffect, useState } from "react";
import MyProductComp from "../../components/MyProductComp/MyProductComp";
import {
  MyProductsPageContainer,
  MyProductsTitleContainer,
  NoTextAndImgContainer,
  ProductsContainer,
} from "./style";
import { useSelector } from "react-redux";
import { fetchProductByUserId } from "../../api/productsFetch";
import { InitialStateProps } from "../AccountSettingsPage/AccountSettingsPage";
import { ProductDetailsProp } from "../PDP/PDP";
import noOrder from "../../assets/noOrder.svg";
import { OrderImageContainer } from "../OrdersPage/style";

const MyProducts = () => {
  const user = useSelector((state: InitialStateProps) => state.user);
  const [productsSelling, setProductsSelling] = useState<any>();

  useLayoutEffect(() => {
    fetchProductByUserId(user.id).then((data) => {
      setProductsSelling(data);
    });
  }, []);

  if (productsSelling) {
    if (productsSelling.length > 0) {
      return (
        <MyProductsPageContainer>
          <MyProductsTitleContainer>
            <h2>My Products</h2>
          </MyProductsTitleContainer>
          <ProductsContainer>
            {productsSelling.map((value: ProductDetailsProp, key: any) => {
              return <MyProductComp key={key} product={value} />;
            })}
          </ProductsContainer>
        </MyProductsPageContainer>
      );
    } else {
      return (
        <MyProductsPageContainer>
          <MyProductsTitleContainer>
            <h2>My Products</h2>
          </MyProductsTitleContainer>
          <NoTextAndImgContainer>
            <h2>You have no products selling at the moment!</h2>
            <OrderImageContainer>
              <img src={noOrder} />
            </OrderImageContainer>
          </NoTextAndImgContainer>
        </MyProductsPageContainer>
      );
    }
  } else {
    return null;
  }
};

export default MyProducts;
