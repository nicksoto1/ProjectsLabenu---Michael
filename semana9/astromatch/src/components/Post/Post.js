import React, { useEffect, useState } from "react";
import "./Post.css";
import axios from "axios";





const urlGet =
"https://us-central1-missao-newton.cloudfunctions.net/astroMatch/michael/person";

const urlPost = 
"https://us-central1-missao-newton.cloudfunctions.net/astroMatch/michael-soto/choose-person";

const axiosConfig = {
  headers: {
    Authorization: "michael-soto-dumont"
  }
};


const Post = (props) => {
const [perfil, setPerfil] = useState([]);
const [mudarPagina, setMudarPagina] = useState(false);
const [perfilId, setPerfilId] = useState([]);


//GET
useEffect(() => {
  getProfileToChoose()
},[])
const getProfileToChoose = () => {
  axios
  .get(urlGet)
  .then((response) => {
  console.log("AAAAAAAAAaaa")
    setPerfil(response.data.profile);
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

// const  choosePerson = (match) => {
//   let body
//   if (match === "yes") {
//     body = {
//  id:perfilId,
//  choice:true
//     }
//   } else if (match === "no") {
//     body = {
//       id:profileId,
//       choice:false
//     }
//   }
// }





return (
<div>


<div className="Foto">
<img src={perfil.photo} />
</div>
<div className="Texto">
<div className="NameIdade">
  {perfil.name},  {perfil.age} anos
</div>
<div className="Descricao">
{perfil.bio}
</div>
</div>

</div>
)
}

export default Post;