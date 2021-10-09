import React from "react";
import { useHistory } from 'react-router-dom'
import { HeaderContainer,Menu,Lista  } from "./styles";


 const NavBar = () => {

  const history = useHistory();
  
  const goToLoginPage = () => {
    history.push("/Login");
  };

    const goToTripsPage = () => {
      history.push("/list-trips")
    };

    const goToHomePage = () => {
      history.push("/")
  }
  

    // const goToDuvidas = () => {
    //   history.push("../Duvidas/Duvidas.js");
    // };






  return (
    <div className="App">
      <HeaderContainer>
        <p>LabeX</p>
        <nav>
          <Menu>
            <Lista>Header
              <a href="#" onClick={goToHomePage}>Home</a>
            </Lista>
            <Lista>
              <a href="#" onClick={goToTripsPage}>Viagens</a>
            </Lista>
            <Lista>
              <a href="#" onClick={goToLoginPage}>Login</a>
            </Lista>
       
          </Menu>
        </nav>
      </HeaderContainer>
    </div>
  );
}

export default AdmCreateTripPage 