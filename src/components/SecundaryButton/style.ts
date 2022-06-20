import styled from "styled-components";

export const SecundaryButtonStyle = styled.div`
  padding: 5px 10px;
  border: 1px solid #169;
  border-radius: 5px;
  transition: opacity 0.2s ease-in-out, border-radius 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #169;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
    border-radius: 7px;
  }
`;
