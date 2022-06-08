import styled from "styled-components";

const PrimaryButton = styled.div`
  padding: 5px 10px;
  border: 1px solid white;
  border-radius: 5px;
  transition: opacity 0.2s ease-in-out, border-radius 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
    border-radius: 7px;
  }
`;

export { PrimaryButton };
