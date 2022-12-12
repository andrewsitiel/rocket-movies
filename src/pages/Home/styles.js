import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  margin: auto;
  
  > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5rem;
      
      h2 {
        font-weight: 400;
        font-size: clamp(1rem, 1rem + 2vw, 3.2rem);
        line-height: 4.2rem;
      }

      a {
        width: clamp(7.7rem,9.7rem + 13vw , 20.7rem);
        border-radius: 1rem;
        background-color: ${ ({ theme }) => theme.COLORS.PINK };
        
        font-weight: 500;
        font-size: clamp(0.5rem, 0.5rem + 2vw, 1.6rem);
        line-height: 2.1rem;
        color: ${ ({ theme }) => theme.COLORS.GRAY_800 };

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;

        justify-self: end;

        svg {
          font-size: clamp(0.5rem, 0.5rem + 2vw, 2rem);
        }
      }
    }

    @media(min-width:768px) {
      width: 77vw;
    }
`;