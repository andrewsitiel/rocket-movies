import styled from "styled-components";

export const Container = styled.div`
  padding-inline: 12.3rem;
  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
      
      h2 {
        font-weight: 400;
        font-size: 3.2rem;
        line-height: 4.2rem;
      }

      a {
        width: 20.7rem;
        padding: 1.3rem;
        border-radius: 1rem;
        background-color: ${ ({ theme }) => theme.COLORS.PINK };
        
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.1rem;
        color: ${ ({ theme }) => theme.COLORS.GRAY_800 };

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;

        svg {
          font-size: 2rem;
        }
      }
    }
`;