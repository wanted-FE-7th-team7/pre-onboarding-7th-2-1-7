import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`${reset}
  *{
    box-sizing: border-box;
  }
  html {
    font-size:10px;
    /* @media screen and (max-width: 400px) {
      font-size: 8px;
    } */
  }
  
`;

export default GlobalStyle;
