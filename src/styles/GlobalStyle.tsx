import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
 ${reset}

body {
  font-size: 10px;
  box-sizing : border-box;
}

`;
export default GlobalStyle;
