import { useState, useEffect, createContext, useContext } from "react";
import { api } from "../services/api";
import avatar_placeholder from "../assets/avatar_placeholder.svg";

const AuthContext = createContext({});

function AuthProvider({children}) {
  const [user, setUser] = useState();

  async function signIn({email, password}) {
    
   try {
      const response = await api.post("/access", {email, password});
      const {user, token} = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      
      user.avatar_placeholder = avatar_placeholder;
      user.avatar ? user.avatar_url = `${api.defaults.baseURL}/files/${user.avatar}`: null;
      
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);
      setUser(user)
    } catch (error) {

      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível realizar o Login")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");
    
    setUser()
  }

  async function updateUser({updatedUser, avatarFile}) {

    try {
      if(avatarFile) {
        
        const avatarFormData = new FormData()
        avatarFormData.append("avatar", avatarFile);
        
        const { data } = await api.patch("/users/avatar", avatarFormData);
        user.avatar_url = `${api.defaults.baseURL}/files/${data.avatarFilename}`;
      }

      await api.put("/users", updatedUser).then(() => alert("Usuário atualizado com sucesso!"))
      localStorage.setItem("@rocketmovies:user", JSON.stringify(updatedUser))

      
    } catch(error) {
      
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o usuário.");
      }

    }

  }

  useEffect(()=> {

    const userLocalInfos = localStorage.getItem("@rocketmovies:user");
    const LocalStorageToken = localStorage.getItem("@rocketmovies:token");

    if( userLocalInfos && LocalStorageToken) {
      api.defaults.headers.common["Authorization"] = `Bearer ${LocalStorageToken}`;

      setUser(JSON.parse(userLocalInfos));
    }

  }, [])

  return(
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const contextData = useContext(AuthContext);
  return contextData;
}

export {
  AuthProvider,
  useAuth
}