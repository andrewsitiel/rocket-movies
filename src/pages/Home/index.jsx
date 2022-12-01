import { Link } from "react-router-dom";

import { FiPlus } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Movies } from "../../components/Movies";
import { ScrollableArea } from "../../components/ScrollableArea";

import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Home () {
  const [movies, setMovies] = useState([]);

  async function getMovies (title) {
    const { data } = await api.get(`/movies?title=${title}`);
    setMovies(data)
  }

  useEffect(()=>{
    try {

      getMovies("");
    
    } catch(error) {
        if(error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível salvar o filme, tente novamente.")
        }
      }
  
  },[])
  
  return(
  <Container>
    <Header fetch={getMovies} />
    <div>
      <h2>Meus Filmes</h2>
      <Link to="/new"> <FiPlus/> Adicionar filme</Link>
    </div>
    
    <ScrollableArea height={"50vh"}>
      {
        <Movies data={{movies}}/>
      }
      
    </ScrollableArea>

  </Container>
  )
}