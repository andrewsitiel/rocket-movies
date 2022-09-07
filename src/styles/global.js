import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  
  :root {
    font-size: 62.5%;
  };

  body {
    background-color: ${ ({ theme }) => theme.COLORS.GRAY_800 };
    color: ${ ({ theme }) => theme.COLORS.WHITE };
  };

  a, button {
    text-decoration: none;
    border: none;
  };

  body, input, button, textarea {
      font-family: "Roboto Slab", serif;
      font-size: 1.6rem;
      outline: none;
  };

  ul li {
    list-style: none;
  };
`;