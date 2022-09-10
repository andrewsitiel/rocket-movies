import { FiUser, FiMail, FiLock } from "react-icons/fi";
import background from "../../assets/cinema.png"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";

import { Container } from "./styles";

export function SignIn () {
  return (
    <Container>
      <main>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

      <form>
        <legend>Faça seu login</legend>
        <Input title="exemplo@mail.com" icon={FiMail} type="email"/>
        <Input title="Digite sua senha" icon={FiLock} type="password"/>
        <Button title="Entrar" type="submit"/>
      </form>

        <Link title="Criar conta"/>
    </main>

    <img src={background} alt="Cinema room" />
    </Container>
  )
}