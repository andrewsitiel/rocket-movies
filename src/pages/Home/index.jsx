import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Movies } from "../../components/Movies";
import { ScrollableArea } from "../../components/ScrollableArea";

import { Container } from "./styles";

export function Home () {
  return(
  <Container>
    <Header/>
    <div>
      <h2>Meus Filmes</h2>
      <Link to="/new"> <FiPlus/> Adicionar filme</Link>
    </div>
    
    <ScrollableArea height={"70vh"}>

      <Movies data={
        {
        movies:[
            {
              title:"Interestellar", rating: 4, tags:["Aventura","Sci-FI","Drama"] 
            },
            {
              title:"Kung-Fu Panda", rating: 3, tags:["Aventura","Sci-FI","Drama"]
            },
            {
              title:"Viagem ao centro da terra", rating: 0, tags:["Aventura","Sci-FI","Drama"]
            },
            {
              title:"Rei Leão", rating: 2, tags:["Aventura","Sci-FI","Drama"]
            },
            {
              title:"A Viagem de Chihiro", rating: 5, tags:["Aventura","Sci-FI","Drama"]
            },
          ]
        }
      }
      />
      
    </ScrollableArea>

  </Container>
  )
}