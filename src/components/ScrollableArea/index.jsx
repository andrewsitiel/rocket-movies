import 'simplebar/dist/simplebar.min.css';
import {Container} from "./styles";

export function ScrollableArea ({ height, children }) {
  return(
    <Container style={{maxHeight: height}}>
      {children}
    </Container>
  )
}