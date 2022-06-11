import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductDiv = styled.div`
  background-color: rgb(255,255,255);
  color: rgb(19,25,31)
  height: 80px;
  width: 230px;
  border: solid 1px rgb(0, 180, 204);;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ProductImg = styled(LazyLoadImage)`
  padding: 20px 30px 20px 30px;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
const PageData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const ImgDiv = styled.div`
  background-color: #e7e7e7;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0px 0px;
`;

export { ProductDiv, ProductImg, PageData, ImgDiv };
