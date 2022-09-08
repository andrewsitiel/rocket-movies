import { Container } from "./styles"

export function Input ({ title, icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon/>}
      <label htmlFor={title}>{title}</label>
      <input 
        placeholder={title}
        id={title}
        {...rest} 
        />
    </Container>
  )
}