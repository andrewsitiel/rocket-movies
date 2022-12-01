import { useNavigate } from "react-router-dom";
import { Tags } from "../../components/Tags";
import { Rating } from "../../components/Rating";
import { Container } from "./styles";

export function Movies ({data}) {
  const navigate = useNavigate();

  function handleNavigate(id) {
    navigate(`/movie/${id}`)
  }

  return(
    <Container>
      { data &&
        data.movies.map( ({ id, title, description, rating, tags }) => {
            return (
              <div
                key={id}
                onClick={() => {handleNavigate(id)}}
              >
                <h3>{title}</h3>

                <Rating rating={rating}/>
                <p>{description}</p>

                <Tags data={{tags}}/>
                
                </div>
            )
          })
      }
    </Container>
  )
}