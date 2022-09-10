import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
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

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;