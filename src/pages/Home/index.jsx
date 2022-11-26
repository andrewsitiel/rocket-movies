import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Movies } from "../../components/Movies";
import { ScrollableArea } from "../../components/ScrollableArea";

import { Container } from "./styles";

export function Home () {
  const { user } = useAuth();
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    async function getMovies() {
      const response = await api.get("/movies")
      setMovies(response.data)
    }

    getMovies()
  },[])

  return(
  <Container>
    <Header/>
    <div>
      <h2>Meus Filmes</h2>
      <Link to="/new"> <FiPlus/> Adicionar filme</Link>
    </div>
    
    <ScrollableArea height={"50vh"}>

      <Movies data={{movies}}/>
      
    </ScrollableArea>

  </Container>
  )
}