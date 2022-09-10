import { Header } from "../../components/Header";
import { ScrollableArea } from "../../components/ScrollableArea";

import {FiArrowLeft} from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";
import { Form } from "./styles";
import { NoteItem } from "../../components/NoteItem";

export function NewMovie () {
  return(
    <>  
      <Header/>
        <ScrollableArea height={"70vh"}>
          <Link href="/" title="Voltar" icon={FiArrowLeft}/>
          <Form>
            <legend>Novo filme</legend>
    
            <div>
              <Input title="Título" type="text"/>
              <Input title="Digite sua nota (de 0 a 5)" type="number" min="0" max="5"/>
              <textarea placeholder="Digite uma descrição para o filme"/>
            </div>
    
            <h2>Marcadores</h2>
            <div>
              <NoteItem title="React"/>
              <NoteItem title="React"/>
              <NoteItem title="React"/>
              <NoteItem isNew/>
            </div>
    
            <Button title="Salvar alterações" type="submit"/>
          </Form>
        </ScrollableArea>
    </>
  )
}