import { Link } from "react-router-dom";
import styled from "styled-components";

export const Anchor = styled(Link)`
  display: flex; 
  align-items: center;
  gap: 0.8rem;

  font-size: 1.6rem;
  line-height: 2.1rem;
  color: ${ ({ theme }) => theme.COLORS.PINK };
`;