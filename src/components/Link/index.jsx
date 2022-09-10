import { Container} from "./styles"

export function Link ({title, icon: Icon, href}) {
  return(
    <Container href={href}>
      {Icon && <Icon/>}
     <span>{ title }</span>
    </Container>
  )
}