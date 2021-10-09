import React, { useEffect, useState } from "react";
import "./Botao.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import FavoriteIcon from "@material-ui/icons/Favorite";




const Botao = (props) => {
  const [perfil, setPerfil] = useState([]);
 

  const onClickBotaoX = () => {
    console.log("eeeeeee");
    const body = {
      id: perfil.id,
      choice:false
    }
  };

  const onClickCoracao = () => {
    console.log("aaaaaaa");
 
    }





  return (
    <div className="App-iconPerfil">
        <a href="www.google.com">
      <HighlightOffIcon
        color="secondary"
        style={{ fontSize: 40 }}
        onClick={onClickBotaoX}
      />
      </a>
      <FavoriteIcon
        color="secondary"
        style={{ fontSize: 40 }}
        onClick={onClickCoracao}
      />
    </div>
  );
}

export default Botao;
