import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  gap: 1.2rem;
  
  background-color: ${ ({ theme }) => theme.COLORS.GRAY_800 };
  padding: 1.9rem 1.2rem;
  
  border: none;
  border-radius: 1rem;

  input {
    width: 100%;
    border: none;
    background-color: ${ ({ theme }) => theme.COLORS.GRAY_800 };
  }

  svg {
    font-size: 2rem;
    color: ${ ({ theme }) => theme.COLORS.GRAY_500 }; 
  };

  label {
      width: 0;
      height: 0;
      white-space: nowrap;
      position: absolute;
      top: -1px;
      left: -1px;
      overflow: hidden;
      visibility: hidden;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button,
    input[type=number] {
      -webkit-appearance: none;
      appearance: none;
      -moz-appearance: textfield;
    }
`;