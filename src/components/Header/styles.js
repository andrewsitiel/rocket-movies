import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    line-height: 1rem;
    color: ${ ({ theme })=> theme.COLORS.PINK };
  }

  input {
    padding: 1rem;
    background-color: #9993;
    border: none;
    border-radius: 0.5rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    > img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      }
    
    > div {
      line-height: 1rem;
    }
  }
`;