import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
  }

  #root{
    height: 100vh;
    margin: 0 auto;
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  
`;

export default GlobalStyle;
