import styled from "styled-components";

const Container = styled.div`
  background-color: #131a22;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  font-size: 13px;
  height: 25px;
  position: fixed;
  z-index: 9;
  width: 100%;
  top: 70px;
  border-bottom: 1px solid #168;

  > * {
    margin: 0 10px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export { Container };
