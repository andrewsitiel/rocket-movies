import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import background from "../../assets/cinema.png"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";

import { Container } from "./styles";

export function SignUp () {
  return (
    <Container>
      <main>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

      <form>
        <legend>Crie sua conta</legend>
        <Input title="Digite seu nome" icon={FiUser} type="text"/>
        <Input title="exemplo@mail.com" icon={FiMail} type="email"/>
        <Input title="Digite sua senha" icon={FiLock} type="password"/>
        <Button title="Cadastrar" type="submit"/>
      </form>

        <Link href="/" title="Voltar para o login" icon={FiArrowLeft}/>
    </main>

    <img src={background} alt="Cinema room" />
    </Container>
  )
}