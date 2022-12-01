import { useState } from "react";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { ScrollableArea } from "../../components/ScrollableArea";

import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";
import { Container, Form } from "./styles";
import { NoteItem } from "../../components/NoteItem";

export function NewMovie () {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTags() {
    if(newTag.length > 0) {
      setTags( prevState => [...prevState, newTag]);
      setNewTag("")
    }
  }

  function handleRemoveTags(deletedTag) {
    setTags(prevState => prevState.filter(tag => tag !== deletedTag));
  }

  async function handleNewMovie(event) {
    event.preventDefault()

    if(!title) {
      alert("Você não definiu um título para o filme.");
      return
    }
    
    if(!rating) {
      alert("Avalie o filme com uma nota de 0 a 5");
      return
    }

    if(newTag) {
      alert("Você deixou tags não salvos no campo.")
      return
    }

    const movieData ={
      title,
      description,
      rating,
      tags
    };

    setTags([])
    setTitle("")
    setRating("")
    setDescription ("")

    try {
      await api.post("/movies", movieData);
      alert("Filme salvo com sucesso!");
    } catch(error) {
      
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível salvar o filme, tente novamente.")
      }
    }
  }

  return(
    <Container>  
      <Header/>
        <ScrollableArea height={"70vh"}>
          <Link href="/" title="Voltar" icon={FiArrowLeft}/>
          <Form>
            <legend>Novo filme</legend>
    
            <div>
              <Input
                title="Título"
                type="text"
                value={title}
                onChange={e => {setTitle(e.target.value)}}
              />
              <Input
                title="Digite sua nota (de 0 a 5)"
                type="number"
                min="0"
                max="5"
                value={rating}
                onChange={e => {setRating(e.target.value)}}
              />
              <textarea
                placeholder="Digite uma descrição para o filme"
                value={description}
                onChange={e => {setDescription(e.target.value)}}
              />
            </div>
    
            <h2>Marcadores</h2>
            <div>
              {
                tags && tags.map((tag, index) => {
                  return <NoteItem
                    key={index}
                    title={ tag }
                    onClick={() => {handleRemoveTags(tag)}}
                  />
                })
              }
              <NoteItem
                isNew
                value={newTag}
                onChange={e => {setNewTag(e.target.value)}}
                onClick={handleAddTags}
              />
            </div>
    
            <Button
              title="Salvar alterações"
              type="submit"
              onClick={handleNewMovie}
            />
          </Form>
        </ScrollableArea>
    </Container>
  )
}