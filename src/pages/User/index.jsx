import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import{ Container, Form } from "./styles";
import{ Input } from "../../components/Input";
import{ Button } from "../../components/Button";
import { Link } from "../../components/Link";


export function User () {
  return (
    <Container>
      <header>
      <Link href="/" title="Voltar" icon={FiArrowLeft}/>
      </header>

      <Form>
        <div>
          <img src="https://www.github.com/andrewsitiel.png" alt="user-photo" />
          <label htmlFor="user-photo"><FiCamera/></label>
          <input type="file" accept="image/*" id="user-photo"/>
        </div>

        <div>
          <Input title="Digite seu nome" icon={FiUser} type="text"/>
          <Input title="exemplo@gmail.com" icon={FiMail} type="email"/>
          <Input title="Digite sua senha" icon={FiLock} type="password"/>
          <Input title="Digite sua nova senha" icon={FiLock} type="password"/>
        </div>
        <Button title="Salvar" type="submit" isLoading/>
      </Form>

      </Container>
  )
}