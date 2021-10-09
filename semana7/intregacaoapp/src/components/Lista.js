import axios from "axios";
import React from "react";
import styled from "styled-components";

const DeleteButton = styled.span`
color: red;
margin-left: 10px;
`


const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const axiosConfig = {
  headers: {
    Authorization: "michael-soto-dumont",
  },
};

class Lista extends React.Component {
  state = {
    usersList: [  ]
  };

  componentDidMount = () => {
    this.getAllUsers();
  };
  getAllUsers = () => {
     // ESSA É A SINTAXE DO ASYNC E AWAIT (COLOQUE UM ASYNC NA FUNCAO GETALLUSERS)

    // try {
    //   const response = await axios.get(baseUrl, axiosConfig)

    //   this.setState({ Lista: response.data });
    // } catch (error) {
    //   console.log(error.message)
    // }

    axios(baseUrl, axiosConfig)
      .then((resposta) => {
        this.setState({ usersList: resposta.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  deleteUser = (userId) => {
    axios
    .delete(`${baseUrl}/${userId}`,  axiosConfig)
      .then((resposta) => {
        alert("Usuário deletado com sucesso!");
        this.getAllUsers();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  render() {
    const renderLista = this.state.usersList.map((usuario) => {
      return (
        <p key={usuario.id}>
          {usuario.name}
          <DeleteButton onClick={() => this.deleteUser(usuario.id)}>
            X
          </DeleteButton>
        </p>
      );
    });

    return <div>{renderLista}</div>;
  }
}

export default Lista;
