import styled from "styled-components";
import {
  DivAnimation,
  InputAnimation,
  AnimationProps
} from "./animation";

export const Container = styled.header`
    padding-block: 3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;

    border-bottom: 1px solid ${ ({ theme }) => theme.COLORS.GRAY_800 };
    margin-bottom: 4rem;

    h1 {
      font-size: clamp(1rem, 1rem + 2vw, 2.4rem);
      line-height: 3.2rem;
      color: ${ ({ theme })=> theme.COLORS.PINK };
    }

    > button {
      background: none;
      border: none;

      display: flex;
      flex-direction: column;
      gap: 5px;

      > span:before {
        content: "";
        width: 25px;
        height: 1px;
        display: block;
        background-color: white;
        transition: transform 300ms, display 300ms;
      }

      span {
        margin: auto;

        &:first-child:before {
          transform: ${({isOpen}) => isOpen ? "rotate(45deg) translateX(7.5px)" : "none" };
        }

        &:nth-child(2):before {
          display: ${({isOpen}) => isOpen ? "none" : "block" };
        }
        
        &:last-child:before {
          transform: ${({isOpen}) => isOpen ? "rotate(-45deg) translateX(7.5px)" : "none" };
        }


      }
    }

    @media(min-width: 768px) {
      > button {
        display: none;
      }
    }
`;

export const Menu = styled.aside`
    position: absolute;
    top: 60px;
    right: 10px;
    z-index: 100;
    
    width: 250px;
    padding: 1.5rem;
    background-color: ${ ({ theme }) => theme.COLORS.BLACK_TRANSPARENT };
    border-radius: 10px;
    
    display: ${ ({ isOpen }) => isOpen ? "grid" : "none"};
    gap: ${ ({ isHome }) => isHome ? "10px" : "0" };

    > div:nth-child(1) {
        max-width: 63rem;
        margin: auto;
     }

    > div:nth-child(2) {
        display: flex;
        align-items: center;
        justify-self: end;
        gap: 1rem;
        
        img {
          width: 6.4rem;
          height: 6.4rem;
          border-radius: 50%;
        }
        
        > div {
            text-align: right;

            h2 {
              font-size: 1.4rem;
              line-height: 1.8rem;
            }

          > button {
              font-size: 1.4rem;
              line-height: 1.8rem;
              background: none;
              color: ${ ({ theme }) => theme.COLORS.GRAY_500};
            }
        }
    }


    @media(max-width: 768px) {
      > div:nth-child(1) {
          padding-block: ${({isHome}) => isHome ? "1.9rem" : "0" };
        
          > input {
            height: ${({isHome}) => isHome ? "19px" : "0" };
            }
        }
    }
    
    @media(min-width: 768px) {
      all: unset;
      width: -webkit-fill-available;
      display: flex;
      justify-content: space-between;
      gap: 4rem;

      > div:nth-child(1) {
        animation: ${DivAnimation} ${({isHome}) => isHome ? AnimationProps.open :  AnimationProps.close };

        > input {
          animation: ${InputAnimation} ${({isHome}) => isHome ? AnimationProps.open :  AnimationProps.close };
        }
     }
    }
`;