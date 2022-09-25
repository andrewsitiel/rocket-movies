import { Link } from "react-router-dom";
import { Container } from "./styles";
import { Input } from "../Input";

export function Header () {
  return(
    <Container>
      <Link to="/"><h1>RocketMovies</h1></Link>
      
      <Input type="text" title="Digite um título"/>
      
      <div>
        <div>
          <h2>Andrews Itiel</h2>
          <a>sair</a>
        </div>
      
        <Link to="/user"><img src="https://www.github.com/andrewsitiel.png" alt="User's image"/></Link>
      </div>
    </Container>
  )
}