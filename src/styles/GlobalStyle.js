import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;500;700&family=Ubuntu:ital,wght@0,300;0,400;0,700;1,500&display=swap');
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    font-size: 62.5%;
    font-family: 'Ubuntu', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, buttom, textarea, selet {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
`;
