import styled from "styled-components";

export const BreadCrumbContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const BreadCrumbText = styled.p`
  font-size: 0.9rem;
  padding-left: 2px;
  color: gray;

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const BreadCrumbAnchor = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #02a4e3;
  }
`;

export const BreadCrumbSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
