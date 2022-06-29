import { MdArrowRight } from "react-icons/md";
import styled from "styled-components";

const ImageUploadArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0;
  height: 100%;
  width: 70%;

  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const HideInput = styled.input`
  position: absolute;
  opacity: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  top: 0px;
  cursor: pointer;
`;

const ImageUploader = styled.div`
  background-color: #02a4e3;
  color: white;
  width: 150px;
  height: 150px;
  padding: 0px 20px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  border-radius: 3px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  margin: 15px;

  &:hover {
    transform: scale(0.95);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`;

export { ImageUploadArea, ImageUploader, HideInput };
