import { Container } from "./styles"
import { Input } from "../Input"

export function Header () {
  return(
    <Container>
      <a href="/"><h1>RocketMovies</h1></a>
      
      <Input type="text" title="Digite um título"/>
      
      <div>
        <div>
          <h2>Andrews Itiel</h2>
          <a>sair</a>
        </div>
      
        <a href="/user"><img src="https://www.github.com/andrewsitiel.png" alt="User's image"/></a>
      </div>
    </Container>
  )
}