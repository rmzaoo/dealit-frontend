import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../../api/productsFetch";
import TextLink from "../TextLink/TextLink";
import { Container } from "./style";

interface Props {
  className?: string;
}

const CategoryBar = ({ className }: Props) => {
  const [categories, setCategories] = useState<any[]>();
  const [categoryNames, setCategoryNames] = useState<string[]>();
  const navigate = useNavigate();
  function navigateMainCat(category: string) {
    navigate(`/products/${category}`);
    window.location.reload();
  }
  function navigateSubCat(category: string) {
    navigate(`/products/${category}`);
    window.location.reload();
  }

  useLayoutEffect(() => {
    fetchCategories()
      .then((data) => {
        const cats = data.map((e: any) => {
          return {
            mainCategory: e.name,
            subCategories: e.subcategories.map((s: any) => s.name),
          };
        });
        setCategories(cats);
        return data.map((cat: any) => cat.name);
      })
      .then((data: any) => setCategoryNames(data));
  }, []);

  return !categories ? null : (
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
  );
};

export default CategoryBar;
