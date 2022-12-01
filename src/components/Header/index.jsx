import { Link, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { Input } from "../Input";

import { useAuth } from "../../hooks/auth";

export function Header ({fetch}) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const path = window.location.pathname
  const isHome = path === "/" ? true : false;

  function handleSignOut() {
    navigate("/");
    signOut();
  }
 
  return(
    <Container isHome={isHome}>
      <Link to="/"><h1>RocketMovies</h1></Link>
      
      <Input
        type="text"
        title="Digite um título"
        onChange={e => { fetch(e.target.value)}}
      />
      
      <div>
        <div>
          <h2>{user.name}</h2>
          <button onClick={handleSignOut}>sair</button>
        </div>
      
        <Link to="/user"><img src={user.avatar_url ?? user.avatar_placeholder} alt="User's image"/></Link>
      </div>
    </Container>
  )
}