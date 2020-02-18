import { createGlobalStyle } from 'styled-comments';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #app {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smooting: antialiased !important;
    font-family: 'Montserrat', sans-serif;
    background: yellow;
  }

  button, a {
    cursor: pointer;
  }

`;

export default GlobalStyle;
