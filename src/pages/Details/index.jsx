import { useEffect, useState } from "react";
import { useParams, useNavigate }  from "react-router-dom";
import { useAuth }  from "../../hooks/auth";
import { api } from "../../services/api";

import { FiArrowLeft, FiClock } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Link } from "../../components/Link";
import { Tags } from "../../components/Tags";
import { Rating } from "../../components/Rating";
import { ScrollableArea } from "../../components/ScrollableArea";
import { Container } from "./styles";


export function Details () {
  const { user } = useAuth();
  const navigate = useNavigate()
  const { id: movie_id } = useParams();
  const [movie, setMovie] = useState([]);
  
  async function handleDeleteMovie() {
    const confirmDeleteMovie = window.confirm("Tem certeza que deseja apagar este filme?")

    if(confirmDeleteMovie) {
      await api.delete(`/movies/${movie_id}`);
      navigate("/")
      alert("Filme deletado com sucesso!")
    }
  }

  useEffect(()=> {

    async function getMovie(){
      const response = await api.get(`/movies/${movie_id}`);
      setMovie(response.data);
    }
    
    getMovie()
  },[])

  return (
    <Container>
      <Header/>
      <ScrollableArea height={"70vh"}>
        <aside>
          <Link title="Voltar" icon={FiArrowLeft} href="/"/>
          <button onClick={handleDeleteMovie}>Delete</button>
        </aside>
        
        <div>
          <h2>{movie.title}</h2> <Rating rating={movie.rating}/>
        </div>
        
        <div>
          <p>
            <img src={user.avatar_url ?? user.avatar_placeholder} alt="user's photo"/>
            {user.name}
          </p>

          <span>
            <FiClock/> {movie.updated_at}
          </span>
        </div>
        
        <Tags data={{ tags: movie.tags ?? [] }} />
        
        <section>
         {movie.description}
        </section>
      </ScrollableArea>
    </Container>
  )
}