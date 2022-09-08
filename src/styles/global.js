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
    background-color: ${ ({ theme }) => theme.COLORS.GRAY_900 };
    color: ${ ({ theme }) => theme.COLORS.WHITE };
  };

  a, button {
    text-decoration: none;
    border: none;
    
    transition: filter 200ms;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  };

  body, input, button, textarea {
      font-family: "Roboto Slab", serif;      
      font-size: 1.4rem;
      color: ${ ({ theme }) => theme.COLORS.WHITE };

      outline: none;
  };

  ul {
    list-style: none;
  };
`;