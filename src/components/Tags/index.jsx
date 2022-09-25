import { Container } from "./styles";

export function Tags ({ data }) {
  return (
    <Container>
      {
        data.tags.map( tag => {
          return <span key={ tag }>{ tag }</span>
        })
      }
    </Container>
  )


}