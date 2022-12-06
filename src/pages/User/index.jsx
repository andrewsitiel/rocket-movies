import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import{ Container, Form } from "./styles";
import{ Input } from "../../components/Input";
import{ Button } from "../../components/Button";
import { Link } from "../../components/Link";


export function User () {
  const { user, updateUser } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const [avatar, setAvatar] = useState(user.avatar_url);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate(event) {
    event.preventDefault()

    const userData ={
      name,
      email,
      old_password: oldPassword,
      password: newPassword
    }

    const updatedUser = Object.assign(user, userData);

    await updateUser({updatedUser, avatarFile});
    
    setOldPassword()
    setNewPassword()
  }


  function handleUserAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const avatarPreview = URL.createObjectURL(file);
   setAvatar(avatarPreview);
  }

  return (
    <Container>
      <header>
      <Link href="/" title="Voltar" icon={FiArrowLeft}/>
      </header>

      <Form>
        <div>
          <img src={avatar ?? user.avatar_placeholder} alt="user-photo" />
          <label htmlFor="user-photo"><FiCamera/></label>
          <input type="file" accept="image/*" id="user-photo" onChange={handleUserAvatar}/>
        </div>

        <div>
          <Input
            title="Digite seu nome"
            icon={FiUser} 
            type="text"
            onChange={(e) => {setName(e.target.value)}}
            value={name}
          />
          <Input
            title="exemplo@gmail.com"
            icon={FiMail} 
            type="email"
            onChange={(e) => {setEmail(e.target.value)}}
            value={email}
          />
          <Input
            title="Digite sua senha atual"
            icon={FiLock} 
            onChange={(e) => {setOldPassword(e.target.value)}}
            type="password"
          />
          <Input
            title="Digite sua nova senha"
            icon={FiLock} 
            onChange={(e) => {setNewPassword(e.target.value)}}
            type="password"
          />
        </div>
        <Button title="Salvar" type="submit" onClick={handleUpdate}/>
      </Form>

      </Container>
  )
}