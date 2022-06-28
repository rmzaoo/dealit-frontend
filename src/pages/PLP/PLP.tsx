import React, { useEffect, useLayoutEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { PrimaryButton } from "../../components/PrimaryButton/style";
import axios from "axios";
import { MdStayCurrentLandscape } from "react-icons/md";

const PLP = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProds, setCurrentProds]: any = useState([]);
  const { category1, category2 }: any = useParams();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (category2) {
      axios
        .get(
          `https://dealit-backend.herokuapp.com/dealit/api/products/category/${category2}?page=${currentPage}`
        )
        .then((response: any) => {
          setCurrentProds(response.data);
          console.log(response.data);
          return currentProds;
        });
    } else if (category1) {
      axios
        .get(
          `https://dealit-backend.herokuapp.com/dealit/api/products/category/${category1}?page=${currentPage}`
        )
        .then((response: any) => {
          setCurrentProds(response.data);
          console.log(response.data);
          return currentProds;
        });
    }
  }, [currentPage, category1, category2]);

  return (
    <Container>
      <SafeContainer>
        <Category>
          <div>
            <span
              style={{ fontSize: "18px", cursor: category2 ? "pointer" : "" }}
              onClick={() => navigate(`/products/${category1}`)}
            >
              {category1}
            </span>
            {category2 && (
              <>
                <span style={{ fontSize: "18px" }}> &#62; </span>
                <span style={{ fontSize: "18px" }}>{category2}</span>
              </>
            )}
          </div>
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
          {currentProds.length < 6 ? (
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
  );
};
export default PLP;
