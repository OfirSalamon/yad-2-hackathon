import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
    -webkit-font-smoothing: antialiased;
    direction: rtl;
    font-size: 11.2px;
  }
  
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Roboto', sans-serif;
  }
  
  h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
    line-height: 1.15;
  }

  h3 {
    font-size: 1.75rem;
  }
  
  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }
  
  h6 {
    font-size: 1rem;
  }
  
  hr {
    display: block;
    height: 1px;
    width: 100%;
    border: 0;
    margin: 0;
    padding: 0;
  }
   
  ::-webkit-scrollbar {
    width: 0.75rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar {
  display: none;
}

  ::-webkit-scrollbar-thumb {
    background: #9e9e9e;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #003148;
  }
  
  ::-webkit-scrollbar-track {
    border-radius: 4px;
  }
`;

export default GlobalStyle;
