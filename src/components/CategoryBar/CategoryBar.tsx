<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../../api/productsFetch";
=======
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
>>>>>>> master
import TextLink from "../TextLink/TextLink";
import { Container, SubsContainer } from "./style";
import { useSelector } from "react-redux";

interface Props {
  className?: string;
}



const CategoryBar = ({ className }: Props) => {
  const params = useParams();
  const categories = useSelector((state: any) => state.categories);
  const navigate = useNavigate();
<<<<<<< HEAD
  const categories = fetchCategories();

  return !categories ? null : (
    <Container className={className}>
      {categories.map((category: string) => (
        <TextLink
          onClick={() => navigate(`/products/${category}`)}
          key={category}
        >
          {category}
        </TextLink>
      ))}
    </Container>
=======

  const navigateMainCat = (category: string) => {
    navigate(`/products/${category}`);

  }

  const navigateSubCat = (category: string) => {
    navigate(`/products/${params.category1}/${category}`);

  }

  return !categories ? null : (
    <>
      <Container className={className}>
        {categories.map(
          (category: { mainCategory: string; subCategories: string[] }) => (
            <TextLink
              onClick={() => navigateMainCat(category.mainCategory)}
              key={category.mainCategory}
            >
              {category.mainCategory}
            </TextLink>
          )
        )}
      </Container>
      {params.category1 && (
        <SubsContainer className={className}>
          {categories
            .filter((cat: any) => cat.mainCategory === params.category1)[0]
            .subCategories.map((category: string) => (
              <TextLink onClick={() => navigateSubCat(category)} key={category}>
                {category}
              </TextLink>
            ))}
        </SubsContainer>
      )}
    </>
>>>>>>> master
  );
};

export default CategoryBar;
