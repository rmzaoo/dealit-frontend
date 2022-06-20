import React, { useLayoutEffect, useState } from "react";
import {
  Category,
  Container,
  ContainerProducts,
  DisabledButton,
  PageBottoms,
  SafeContainer,
  StyledProductListing,
  StyledSpan,
} from "./style";
import { useParams } from "react-router-dom";
import { PrimaryButton } from "../../components/PrimaryButton/style";
import axios from "axios";

const PLP = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProds, setCurrentProds]: any = useState([]);
  const { category1, category2 }: any = useParams();

  useLayoutEffect(() => {
    if (category1) {
      axios
        .get(
          `https://dealit-backend.herokuapp.com/dealit/api/products/category/${category1}?page=${currentPage}`
        )
        .then((response: any) => {
          setCurrentProds(response.data);
          return currentProds;
        });
    }
    if (category2) {
      axios
        .get(
          `https://dealit-backend.herokuapp.com/dealit/api/products/category/${category2}?page=${currentPage}`
        )
        .then((response: any) => {
          setCurrentProds(response.data);
          return currentProds;
        });
    }
  }, [currentPage]);

  console.log(currentProds);
  console.log(currentPage);
  return (
    <Container>
      <SafeContainer>
        <Category>
          <h1>Category</h1>
          <span>{category1}</span>
        </Category>

        <ContainerProducts>
          <StyledProductListing oneColumn={false} products={currentProds} />
        </ContainerProducts>

        <PageBottoms>
          {currentPage === 1 ? (
            <DisabledButton>Previous</DisabledButton>
          ) : (
            <PrimaryButton
              onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
            >
              Previous
            </PrimaryButton>
          )}
          <StyledSpan>Page {currentPage}</StyledSpan>
          {currentPage === 2 ? (
            <DisabledButton>Next</DisabledButton>
          ) : (
            <PrimaryButton
              onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
            >
              Next
            </PrimaryButton>
          )}
        </PageBottoms>
      </SafeContainer>
    </Container>
    /*
    <MainContainer>
      <Parallax ref={parallax} pages={3} onScroll={() => scroll(0)}>
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            position: "sticky",
          }}
        >
          <CategoryDiv>
            <MainCategory>Category: {category2 ? (category2) : (category1)}</MainCategory>
            <MainText>Scroll down to see all the products!</MainText>
          </CategoryDiv>
          <ProductListing oneColumn={false} products={mainProductsCategory} />
        </ParallaxLayer>

        <LayerDividing
          offset={0.95}
          speed={0.8}
          style={{
            backgroundColor: "white",
          }}
        >
          <LayerDividing
            offset={0.95}
            speed={1}
            style={{
              clipPath: "polygon(100% 20%, 100% 56%, 0 100%, 0 65%)",
              backgroundColor: "rgb(0, 180, 204)",
            }}
          />
        </LayerDividing>

        <ParallaxLayer
          offset={1.12}
          speed={0.5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <ProductListing oneColumn={false} products={mainProductsCategory} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.9}
          speed={0.8}
          style={{
            backgroundColor: "white",
            clipPath: "polygon(100% 14%, 100% 56%, 0 100%, 0 66%)",
          }}
        >
          <LayerDividing
            offset={1}
            speed={1.5}
            style={{
              clipPath: "polygon(100% 20%, 100% 56%, 0 100%, 0 65%)",
              backgroundColor: "rgb(0, 180, 204)",
            }}
          />
        </ParallaxLayer>
      </Parallax>
      <ScrollTo onClick={() => scroll(0)}>
        <p>Page 1</p>
      </ScrollTo>
      <ScrollTo onClick={() => scroll(1)}>
        <p>Page 2</p>
      </ScrollTo>
      <ScrollTo onClick={() => scroll(2)}>
        <p>Page 3</p>
      </ScrollTo>
    </MainContainer>*/
  );
};
export default PLP;

/*import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Category,
  Container,
  ContainerProducts,
  PageBottoms,
  SafeContainer,
  StyledProductListing,
} from "./style";
import { queryParam } from "../../utils/queryparams";
import { PrimaryButton } from "../../components/PrimaryButton/style";
import { fetchProductByCategoryPerPage } from "../../api/productsFetch";

const PLP = () => {
  const pageQueryParam = queryParam("page") || "1";
  const categoryQueryParam = queryParam("category") || "recent";

  const [currentCategory, setCurrentCategory] = useState(categoryQueryParam);
  const [currentPage, setCurrentPage] = useState(pageQueryParam);
  const [products, setProducts] = useState([]);

  useLayoutEffect(() => {
    setCurrentCategory(categoryQueryParam);
    setCurrentPage(pageQueryParam);

    fetchProductByCategoryPerPage(
      parseInt(pageQueryParam),
      categoryQueryParam
    ).then((data) => {
      setProducts(data);
    });
  }, [categoryQueryParam, pageQueryParam]);


  return (
    <Container>
      <SafeContainer>
        <Category>
          <h1>Category</h1>
          <span>{currentCategory}</span>
        </Category>

        <ContainerProducts>
          <StyledProductListing oneColumn={false} products={products} />
        </ContainerProducts>
        <PageBottoms>
          <PrimaryButton
            onClick={() => setCurrentPage(`${parseInt(currentPage) - 1}`)}
          >
            Previous
          </PrimaryButton>
          <span>Page {currentPage}</span>
          <PrimaryButton
            onClick={() => setCurrentPage(`${parseInt(currentPage) + 1}`)}
          >
            Next
          </PrimaryButton>
        </PageBottoms>
      </SafeContainer>
    </Container>
  );
};
export default PLP;
*/
