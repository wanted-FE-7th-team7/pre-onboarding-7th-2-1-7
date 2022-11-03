import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`${reset}
  *{
    box-sizing: border-box;
    max-width: 45rem;
  }
  html {
    font-size:10px;
  }
`;

export default GlobalStyle;
