import { Header } from "../../components/Header";
import { ScrollableArea } from "../../components/ScrollableArea";

import {FiArrowLeft} from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container } from "./styles";

export function NewMovie () {
  return(
    <Container>
    <Header/>
      <ScrollableArea height={581}>
        <a href="/"><FiArrowLeft/>Voltar</a>

        <form action="">
          <h1>Novo filme</h1>
          <Input title="Título" type="text"/>      
          <Input title="Digite sua nota (de 0 a 5)" type="number" min="0" max="5"/>      
          <textarea/>
          <h2>Marcadores</h2>
          <div></div>
          <Button title="Salvar alterações" type="submit"/>
        </form>
      </ScrollableArea>
    </Container>
  )
}