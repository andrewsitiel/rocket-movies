import { Container } from "./styles";

export function Button ({title, isLoading, ...rest}) {
  return(
    <Container
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? "Carregando" : title}
    </Container>
  )
}