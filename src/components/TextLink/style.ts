import styled from "styled-components";

const TextLinkContainer = styled.div`
    padding: 2px 8px;
    border-bottom: 1px solid transparent;
    letter-spacing: 1.5px;
    transition: border-bottom 0.5s ease-in-out, opacity 0.2s ease-in-out;
  &:hover {
    border-bottom: 1px solid #fff;
    cursor: pointer;
    opacity: 0.8;
  }
`;

export { TextLinkContainer };
