import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { FiUser, FiMail, FiLock } from "react-icons/fi";
import background from "../../assets/cinema.png"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";

import { Container } from "./styles";


export function SignIn () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth()

  function handleSubmit(event){
    event.preventDefault();
    
    const userLoginInfos = {email,password};
    signIn(userLoginInfos);
  }

  return (
    <Container>
      <main>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

      <form>
        <legend>Faça seu login</legend>
        <Input
          title="exemplo@mail.com"
          icon={FiMail}
          type="email"
          onChange={e => {setEmail(e.target.value)}}
        />
        <Input
          title="Digite sua senha"
          icon={FiLock}
          type="password"
          onChange={e => {setPassword(e.target.value)}}
        />
        <Button title="Entrar" type="submit" onClick={handleSubmit}/>
      </form>

        <Link href="/register" title="Criar conta"/>
    </main>

    <img src={background} alt="Cinema room" />
    </Container>
  )
}