import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Manrope', sans-serif;
}
*::before,
*::after {
    box-sizing: border-box;
}
body {
    font-weight: 400;
    font-size: 16px;
    background-color: #f2f4f9;
}
a {
    text-decoration: none;
}
li {
    list-style-type: none;
}
table {
    margin: 0;
}
`;
