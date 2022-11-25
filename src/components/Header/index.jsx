import { Link } from "react-router-dom";
import { Container } from "./styles";
import { Input } from "../Input";

import { useAuth } from "../../hooks/auth";

export function Header () {
  const { user } = useAuth();

  return(
    <Container>
      <Link to="/"><h1>RocketMovies</h1></Link>
      
      <Input type="text" title="Digite um título"/>
      
      <div>
        <div>
          <h2>{user.name}</h2>
          <a>sair</a>
        </div>
      
        <Link to="/user"><img src="https://www.github.com/andrewsitiel.png" alt="User's image"/></Link>
      </div>
    </Container>
  )
}