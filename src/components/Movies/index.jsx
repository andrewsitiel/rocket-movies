import { Tags } from "../../components/Tags";
import { Rating } from "../../components/Rating";
import { Container } from "./styles";

export function Movies ({data}) {
  return(
    <Container>
      {data.movies.map( ({ title, rating,tags }) => {
          return (
          <div key={title}>
            <h3>{title}</h3>
            <Rating rating={rating}/>
            <p>
              Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.
            </p>
            
            <Tags data={{tags}}/>
            </div>
          )
        })}
    </Container>
  )
}