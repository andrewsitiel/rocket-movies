import { keyframes } from "styled-components";

const DivAnimation = keyframes`
  0%{
    padding-block: 0;
  }
  100%{
    padding-block:  1.9rem;
  }
`;

const InputAnimation = keyframes`
  0%{
    height: 0;
  }
  100%{
    height: 19px;
  }
`;


const AnimationProps = {
  open: `150ms 150ms backwards`,
  close: `150ms 150ms reverse forwards`
};

export {
  DivAnimation,
  InputAnimation,
  AnimationProps
}