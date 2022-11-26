import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;

  span {
    background-color: ${ ({ theme }) => theme.COLORS.GRAY_600 };
    padding: 0.7rem;
    border-radius: 1rem;
  }
`;