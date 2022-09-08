import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import{ Container, Form } from "./styles";
import{ Input } from "../../components/Input";
import{ Button } from "../../components/Button";


export function User () {
  return (
    <Container>
      <header>
      <a href="/">
        <FiArrowLeft/>
        <span>Voltar</span>
      </a>

      </header>

      <Form>
        <div>
          <img src="https://www.github.com/andrewsitiel.png" alt="user-photo" />
          <label htmlFor="user-photo"><FiCamera/></label>
          <input type="file" accept="image/*" id="user-photo"/>
        </div>

        <div>
          <Input title="User" icon={FiUser} type="text"/>
          <Input title="E-Mail" icon={FiMail} type="email"/>
          <Input title="Password" icon={FiLock} type="password"/>
          <Input title="New Password" icon={FiLock} type="password"/>
        </div>
        <Button title="Salvar" type="submit" isLoading/>
      </Form>

      </Container>
  )
}