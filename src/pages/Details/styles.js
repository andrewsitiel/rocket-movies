import styled from "styled-components";

export const Container =styled.div`
  a + div {
    display: flex;
    align-items: center;
    gap: 2rem;

    margin-block: 2.4rem; 

    > h2 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;
    }

    svg {
      font-size: 2rem;
    }
  }

  p img {
    width: 1.6rem;
    border-radius: 50%;
  }

  div + div { 
    display: flex;
    gap: 1rem;

    p, span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    };

    svg {
      color: ${ ({ theme }) => theme.COLORS.PINK };
    }
  }

  div:nth-child(4) {
    margin-block: 4rem;
  }
`;