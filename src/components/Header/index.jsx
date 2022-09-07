import { Container } from "./styles"

export function Header () {
  return(
    <Container>

      <h1>RocketMovies</h1>
      
      <input type="text" placeholder="Digite um título"/>
      
      <div>
        <img src="https://www.github.com/andrewsitiel.png" alt="User's logo" />
        
        <div>
          <h2>Seja bem-vindo!!!</h2>
          <span>Andrews!</span>
        </div>
      
      </div>
    </Container>
  )
}




// funcyion