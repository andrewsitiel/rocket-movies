import SimpleBar from 'simplebar-react';
import styled from "styled-components";

export const Container = styled(SimpleBar)`
  .simplebar-scrollbar:before {
    background: ${ ({ theme }) => theme.COLORS.PINK };
    opacity: 1;
  }

  padding-right: 2.4rem;
  overflow-x: hidden;
`;