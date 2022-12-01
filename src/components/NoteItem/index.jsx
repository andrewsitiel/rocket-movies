import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function NoteItem({title, isNew, onClick, ...rest}) {
  return(
    <Container isNew={isNew}>
      <input 
        type="text"
        placeholder="Novo marcador"
        value={title}
        readOnly={!isNew}
        {...rest}
      />
      {isNew ? <FiPlus onClick={onClick}/> : <FiX onClick={onClick}/>}
    </Container>
  )
}