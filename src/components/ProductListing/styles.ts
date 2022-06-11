import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductDiv = styled.div`
  background-color: rgb(255,255,255);
  color: rgb(19,25,31)
  width: 220px;
  border: solid 1px rgb(0, 180, 204);;
  border-radius: 10px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ProductImg = styled(LazyLoadImage)`
  padding: 20px 30px 20px 30px;
  width: 180px;
  height: 170px;
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
const DataDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 10px;
`;
const AddToCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 180, 204);
  border-radius: 3px;
  margin: 6px;
  font-size: 14px;
  width: 90px;
  height: 30px;
  cursor: pointer;
  color: rgb(19, 25, 31);
  &:hover {
    color: rgb(0, 180, 204);
    background-color: rgb(19, 25, 31);
    transition: 0.5s;
  }
`;

export { ProductDiv, ProductImg, PageData, ImgDiv, AddToCart, DataDiv };
