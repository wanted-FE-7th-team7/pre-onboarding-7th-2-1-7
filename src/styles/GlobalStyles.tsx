import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}

body {
  font-size: 10px;
  box-sizing : border-box;
}

`;
export default GlobalStyles;
