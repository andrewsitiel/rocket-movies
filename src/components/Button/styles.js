import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    padding: 1.3rem;
    background-color: ${ ({ theme }) => theme.COLORS.PINK };
    color: ${ ({ theme }) => theme.COLORS.GRAY_800 };
    border-radius: 1rem;

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;