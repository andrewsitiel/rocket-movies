import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > div{ 
    padding: 3.2rem;
    border-radius: 1.6rem;
    background-color: ${ ({ theme }) => theme.COLORS.PINK_TRANSPARENT };
    
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;