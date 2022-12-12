import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from  "../../services/api";

import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";

import { Container } from "./styles";

export function SignUp () {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit (event) {
    event.preventDefault();

    if(!name || !email || !password) {
      return alert("Por favor, preencha todos os campos")
    }
    
    try {
      
      const data = {name, email, password}

      await api.post("/users", data);
      alert("Usuário cadastrado com sucesso");
      navigate("/");

    } catch (error) {

      if(error){
        alert(error.message);
      } else {
        alert("Não foi possível cadastrar");
      }

    }
  }

  return (
    <Container>
      <main>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

      <form>
        <legend>Crie sua conta</legend>
        <Input title="Digite seu nome" icon={FiUser} type="text" onChange={(e) => {setName(e.target.value)}} />
        <Input title="exemplo@mail.com" icon={FiMail} type="email" onChange={(e) => {setEmail(e.target.value)}}/>
        <Input title="Digite sua senha" icon={FiLock} type="password" onChange={(e) => {setPassword(e.target.value)}}/>
        <Button title="Cadastrar" type="submit" onClick={(e) => {handleSubmit(e)}}/>
      </form >

      <Link href="/" title="Voltar para o login" icon={FiArrowLeft}/>
    </main>

    <section></section>
    </Container>
  )
}