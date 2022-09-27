import { FiStar } from "react-icons/fi";
import { useEffect } from "react";
import { Container } from "./styles";
import theme from "../../styles/theme";

export function Rating ({rating}) {
  const pink = theme.COLORS.PINK;
  let stars = [];
    
    for(let i = 1; i <= 5; i++)
    {
      stars.push( 
        <FiStar 
          fill= { rating >= i ? pink : 'transparent' }
          key= {i}
        />
      )
      console.log(i)
    }

  return(
    <Container>
      { stars.map(star => star) }
    </Container>
  )
}