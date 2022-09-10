import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  
  svg {
    stroke: ${ ({ theme}) => theme.COLORS.PINK };
    font-size: 1.3rem;
  }
`;