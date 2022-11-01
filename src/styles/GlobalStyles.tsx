import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}

body {
  font-size: 10px;
}

`;
export default GlobalStyles;
