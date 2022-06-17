import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMainCategoryBySubFetcher } from "../../hooks/categories/useMainCategoryBySubFetcher";
import {
  BreadCrumbAnchor,
  BreadCrumbContainer,
  BreadCrumbSpan,
  BreadCrumbText,
} from "./style";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  subCategory: string;
}

const Breadcrumb = ({ subCategory }: Props) => {
  const mainCat = useMainCategoryBySubFetcher(subCategory)?.main.name;
  const navigate = useNavigate();
  console.log(useMainCategoryBySubFetcher(subCategory)?.main.name);

  return (
    <BreadCrumbContainer>
      <BreadCrumbText>
        <BreadCrumbAnchor onClick={() => navigate(`../products/${mainCat}`)}>
          {mainCat}
        </BreadCrumbAnchor>
      </BreadCrumbText>
      <BreadCrumbSpan>
        <MdKeyboardArrowRight
          style={{ color: "gray", verticalAlign: "middle" }}
        />
      </BreadCrumbSpan>
      <BreadCrumbText>
        <BreadCrumbAnchor
          onClick={() => navigate(`../products/${mainCat}/${subCategory}`)}
        >
          {subCategory}
        </BreadCrumbAnchor>
      </BreadCrumbText>
    </BreadCrumbContainer>
  );
};

export default Breadcrumb;
