import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --white: #ffffff;
        --black: #000000;
        --primary-grey: #D9D9D9;
        --primary-blue: #0094FF;

        --font-large: 25px; 
        --font-medium: 21px; 
        --font-regular: 19px; 
        --font-small: 14px; // 카테고리 태그  

        --border-radius: 10px;
    }

    * { 
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body { font-size: 10px; }

    ul {
        list-style: none;
    }

`;

export default GlobalStyles;
