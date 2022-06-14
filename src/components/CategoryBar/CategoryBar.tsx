import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../../api/productsFetch";
import TextLink from "../TextLink/TextLink";
import { Container } from "./style";

const CategoryBar = () => {
  const navigate = useNavigate();
  const categories = fetchCategories();
  
  return categories && (
    <Container>
      {categories.map((category: string) => (
        <TextLink onClick={() => navigate(`/products?category=${category}`)} key={category}>
        {category}
        </TextLink>
      ))}
    </Container>
  );
};

export default CategoryBar;
