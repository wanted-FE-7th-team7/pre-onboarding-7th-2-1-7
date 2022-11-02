import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`${reset}
  *{
    box-sizing: border-box;
  }
  html {
    font-size:10px;
  }
`;

export default GlobalStyles;
