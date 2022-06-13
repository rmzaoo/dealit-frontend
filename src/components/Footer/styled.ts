import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #131a22;
    color: white;
    text-align: center;
    padding: 2px 0;
    border-top: 1px solid #168;
    span {
        font-size: 13px;
    }
    z-index: 10;
`;

export { Container };
