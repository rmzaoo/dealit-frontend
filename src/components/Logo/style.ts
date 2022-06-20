import styled from "styled-components";

const LogoStyled = styled.span`
  font-weight: 100;
  font-size: 30px;
  letter-spacing: 5px;
  color: white;
  text-shadow: 0 0 10px #000;

  &:hover {
    cursor: pointer;
    color: #0495cf;
    span {
      color: #fff;
     
    }
  }
`;

const LogoColor = styled.span`
  letter-spacing: 0px;
  color: whitesmoke;
  font-weight: bold;
  color: #0495cf;
`;

export { LogoStyled, LogoColor };
