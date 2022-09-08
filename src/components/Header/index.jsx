import { Container } from "./styles"
import { Input } from "../Input"

export function Header () {
  return(
    <Container>
      <h1>RocketMovies</h1>
      
      <Input type="text" title="Digite um título"/>
      
      <div>
        <div>
          <h2>Andrews Itiel</h2>
          <a>sair</a>
        </div>
      
        <img src="https://www.github.com/andrewsitiel.png" alt="User's image" />
      </div>
    </Container>
  )
}




// funcyion