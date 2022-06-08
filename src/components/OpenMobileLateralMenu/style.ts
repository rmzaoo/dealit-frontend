import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const Container = styled.div`
    height: 50px;
    width: 50px;
`;

const IconHamburger = styled(GiHamburgerMenu)`
    height: 100%;
    width: 100%;
    color: white;
    cursor: pointer;
    opacity: 0.8;
`;

export { Container, IconHamburger};
