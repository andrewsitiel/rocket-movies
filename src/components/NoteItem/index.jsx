import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function NoteItem({title, isNew}) {
  return(
    <Container isNew={isNew}>
      <input 
        type="text"
        placeholder="Novo marcador"
        value={title}
        readOnly={!isNew}
      />
      {isNew ? <FiPlus/> : <FiX/>}
    </Container>
  )
}