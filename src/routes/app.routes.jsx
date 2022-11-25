import { Routes, Route} from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { NewMovie } from "../pages/NewMovie";
import { User } from "../pages/User";

export function AppRoutes () {
  return(
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movie" element={<Details/>}/>
        <Route path="/new" element={<NewMovie/>}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
  )
}