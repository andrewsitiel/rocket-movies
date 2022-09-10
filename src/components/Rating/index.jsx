import { FiStar } from "react-icons/fi";
import { Container } from "./styles";
import theme from "../../styles/theme";

export function Rating ({rating}) {
  const pink = theme.COLORS.PINK
  return(
    <Container>
      <FiStar fill={ rating >= 1 ? pink : "transparent"}/>
      <FiStar fill={ rating >= 2 ? pink : "transparent"}/>
      <FiStar fill={ rating >= 3 ? pink : "transparent"}/>
      <FiStar fill={ rating >= 4 ? pink : "transparent"}/>
      <FiStar fill={ rating >= 5 ? pink : "transparent"}/>
    </Container>
  )
}