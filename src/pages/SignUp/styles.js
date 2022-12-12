import styled from "styled-components";
import background from "../../assets/cinema.png";

export const Container = styled.div`
  width: 100%;
  display: grid;
  align-content: center;
  justify-self: center;

  main{
    max-width: 34rem;
    height: 100vh;
    margin-inline: 3rem;
    
    display: grid;
    align-content: center;
    justify-self: center;
  }

  h1 {
    font-size: 4.8rem;
    line-height: 6.3rem;
    color ${ ({ theme }) => theme.COLORS.PINK }
  }

  p {
    font-size: 1.4rem;
    line-height: 1.8rem;
    color ${ ({ theme }) => theme.COLORS.GRAY_400 }
  }

  legend {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;

    margin-block: 4.8rem;
  }

  form {
    display: grid;
    gap: 0.8rem;
  }

  button {
    margin-block: 2.4rem 4.2rem;
  }

  a {
    justify-self: center;
  }

  @media(min-width:768px) {
    grid-template-columns: auto 60vw;
    
    section {
      width: 100%;
      object-fit: cover;
      filter: opacity(0.5);
      background: url(${background});
    }
  }
`;