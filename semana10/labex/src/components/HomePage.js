import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
// import { Layout } from '../Layout/Layout';
import {  Quadrado,Titulo} from "./styles";
import axios from "axios";
import NavBar from './NavBar'


// const urlGet =
// "https://us-central1-labenu-apis.cloudfunctions.net/labeX/michael/trips";

// const urlPost = 
// "https://us-central1-labenu-apis.cloudfunctions.net/labeX/michael-soto/trips";

// const axiosConfig = {
//   headers: {
//     Authorization: "michael-soto-dumont"
//   }
// };


const HomePage = (props) => {
  const history = useHistory();

  const goToTripsPage = () => {
    history.push("/list-trips")
}

const [perfil, setPerfil] = useState([]);
const [mudarPagina, setMudarPagina] = useState(false);
const [perfilId, setPerfilId] = useState([]);


//GET
useEffect(() => {
  getTrips()
},[])
const getTrips = () => {
  axios
  .get(urlGet)
  .then((response) => {
 
    setPerfil(response.data.trips);
  })
  .catch((error) => {
    console.log(error);
  });
}

//POST
useEffect(() => {
  axios
  .post(urlPost, axiosConfig)
  .then((response) => {
    setPerfil(response.data.perfil);
    setPerfilId(response.data.perfilId);
  })
  .catch((error) => {
    console.log(error);
  });
}, []);





  return(
    <div>
      <Header />
      <Titulo>Home</Titulo>
    
    <h4>Clique aqui e conheça nossas viagens</h4>
    <Button onClick={goToTripsPage}>VER VIAGENS</Button>
{/* <Layout> */}
{/* {perfil.name}
{perfil.planet} */}


    </div>


  )

}

export default HomePage