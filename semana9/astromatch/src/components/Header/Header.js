import React, { useState } from "react";
import "./Header.css";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";


const Header = (props) => {
  const [formPage, setFormPage] = useState(true);
  const [pagina, setPagina] = useState("inicio");
  // const mudarPagina = () => {
  //   setFormPage({
  //     formPage: !formPage,
  //   });


  // };

const irParaPrimeiraPagina = () => {
  setPagina("pagina")
}

const irParaOutraPagina = () => {
  setPagina("outraPagina")
}


  return (
    <div className="App-header">
      <h3>astroMatch</h3>

      <SupervisorAccountIcon
        color="primary"
        style={{ fontSize: 40 }}
        onClick={irParaOutraPagina}
        
      />
    </div>
  );
};

export default Header;
