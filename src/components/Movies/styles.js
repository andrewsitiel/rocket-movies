import styled, { keyframes } from "styled-components";

const appearance= keyframes`
  0%{
    transform: translateX(-100%)
  }
  100%{
    transform: translateX(0%)
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  
  > div {
    padding: 3.2rem;
    border-radius: 1.6rem;
    background-color: ${ ({ theme }) => theme.COLORS.PINK_TRANSPARENT };
    animation: ${appearance} 300ms forwards;

    
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    cursor: pointer;
    > p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;