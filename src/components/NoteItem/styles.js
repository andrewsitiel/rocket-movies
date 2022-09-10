import styled from "styled-components";

export const Container = styled.div`
  padding: 1.6rem;
  background-color: ${ ({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_800 };
  
  border: ${ ({ theme, isNew }) => isNew ? `2px dashed  ${theme.COLORS.GRAY_500}` : "none" };
  border-radius: 1rem;
  
  display: flex;
  align-items: center;
  
  input {
    background-color: ${ ({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_800 };
    border: none;
  }

  svg {
    font-size: 1.6rem;
    color: ${ ({ theme }) => theme.COLORS.PINK};
    cursor: pointer;
  }
`;