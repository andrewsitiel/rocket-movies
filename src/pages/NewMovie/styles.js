import styled from "styled-components";

export const Container = styled.div`
  padding-inline: 12.3rem;
`;

export const Form = styled.form`
  display: grid;
  gap: 4rem;
  
  legend {
    margin-top: 2.4rem; 
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;
  }

  > div:nth-child(2) {
    display: grid;
    grid-template-rows: 4.9rem auto;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
    "title rating" 
    "description description";
    gap: 4rem;

    div:nth-child(1) {
      grid-area: title;
    };

    div:nth-child(2) {
      grid-area: rating;
    };

    textarea {
      grid-area: description;
    };

    textarea {
      width: 100%;
      height: 27.4rem;
      padding: 1.9rem 1.2rem;
      resize: none;

      background-color: ${ ({ theme }) => theme.COLORS.GRAY_800 };
      border: none;
      border-radius: 1rem;
    };
  }
>  div:nth-child(4) {
    padding: 1.6rem;
    border-radius: 0.8rem;
    background-color: ${ ({ theme }) => theme.COLORS.BLACK };

    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;
`;