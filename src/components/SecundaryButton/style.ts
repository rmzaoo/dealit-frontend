import styled from "styled-components";

export const SecundaryButton = styled.div`
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  transition: opacity 0.2s ease-in-out, border-radius 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 80%;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
