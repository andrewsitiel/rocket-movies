import { useState, useEffect, createContext, useContext } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({children}) {
  const [user, setUser] = useState();

  async function signIn({email, password}) {
    
   try {
      const response = await api.post("/access", {email, password});
      const {user, token} = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

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
        signIn
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