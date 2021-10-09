import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Container,Titulo} from "./styles";
import Navbar from './NavBar'
// import { Layout } from "../Layout/Layout";

//Para fazermos login como administrador
function LoginPage() {
const [email,setEmail] = useState("")
const [password, setPassword] = useState("")
const history = useHistory()

const handleEmail = (event) => {
  setEmail(event.target.value)
}

const handlePassword = (event) => {
  setPassword(event.target.value)
}

const login = () => {
  const body = {
    email: email,
    password:password
  }

  axios.post ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/michael-soto-dumont/login",body)
.then((response)  =>  {
  localStorage.setItem("token", response.data.token)
  history.push("/trip-detail")
})
.catch((error)  => {
  console.log(error)
})
}

return(
  <div>
       <Header />
          
    <Titulo>Inscrição</Titulo>
    <Layout >
<Container>
  

  <label>Email: </label>
  <input value={email} onChange={handleEmail}  />
  <label>Senha: </label>
  <input value ={password} type="password" onChange={handlePassword}  />
  <button onClick={login}>Fazer login</button>
</Container>
</Layout >
</div>
)
}

export default LoginPage