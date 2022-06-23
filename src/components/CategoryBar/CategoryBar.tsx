import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextLink from "../TextLink/TextLink";
import { Container, SubsContainer } from "./style";
import { useSelector } from "react-redux";

interface Props {
  className?: string;
}

const CategoryBar = ({ className }: Props) => {
  const { category1 } = useParams();
  const categories = useSelector((state: any) => state.categories);
  const navigate = useNavigate();
  const [subCats, setSubCats] = useState<string[]>();

  function navigateMainCat(category: string) {
    navigate(`/products/${category}`);
    window.location.reload();
  }
  function navigateSubCat(category: string) {
    navigate(`/products/${category1}/${category}`);
    window.location.reload();
  }

  useEffect(() => {
    categories.forEach((main: any) => {
      if (main.name === category1) {
        const subs = main.subCategories.map((sub: any) => sub.name);
        setSubCats(subs);
      }
    });
  }, [category1]);

  return !categories ? null : (
    <>
      <Container className={className}>
        {console.log(subCats)}
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
      {category1 && (
        <SubsContainer className={className}>
          {categories.filter((cat: any) => cat.mainCategory === category1)[0].subCategories.map((category: string) => (
            <TextLink onClick={() => navigateSubCat(category)} key={category}>
              {category}
            </TextLink>
          ))}
        </SubsContainer>
      )}
    </>
  );
};

export default CategoryBar;
