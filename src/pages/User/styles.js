import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  header {
    width: 100%;
    height: 14.4rem;
    padding-left: 16.8rem;
    display: flex;
    align-items: center;
    background-color: ${ ({ theme }) => theme.COLORS.PINK_TRANSPARENT };
  };
`;

export const Form = styled.form`
    width: 34rem;
    margin: auto;
    
    > div:nth-child(1) {
      width: 18.6rem;
      margin: 0 auto -2.9rem;

      transform: translateY(-50%);
      position: relative;

    > img {
      width: 18.6rem;
      border-radius: 50%;

    };
    
    input#user-photo {
      position: absolute;
      z-index: -100;
      width: 0;
      visibility: hidden;
    };

    label {
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 50%;

      font-size: 2rem;
      background-color: ${ ({ theme }) => theme.COLORS.PINK };
      color: ${ ({ theme }) => theme.COLORS.GRAY_800 };

      display: flex;
      align-items: center;
      justify-content: center;
      
      position: absolute;
      bottom: 0;
      right: 1rem;

      cursor: pointer;
    };
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    div:nth-child(even) {
      margin-bottom: 1.6rem;
    }
  }
`;