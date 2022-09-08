import styled from "styled-components";

export const Container = styled.header`
  padding-block: 3rem;
  
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 6.4rem;

  border-bottom: 1px solid ${ ({ theme })=> theme.COLORS.GRAY_800 };

  h1 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: ${ ({ theme })=> theme.COLORS.PINK };
  }

  div:nth-child(2) {
    max-width: 63rem;
  }

  > div:nth-child(3) {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    > img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
    }
    
    > div {
      text-align: right;

      > h2 {
        font-size: 1.4rem;
        line-height: 1.8rem;
      }

      > a {
        font-size: 1.4rem;
        line-height: 1.8rem;
        color: ${ ({ theme }) => theme.COLORS.GRAY_500};
      }
    }
  }
`;