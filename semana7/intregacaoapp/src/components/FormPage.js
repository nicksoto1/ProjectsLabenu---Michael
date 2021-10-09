import React from "react";
import axios from "axios";
import styled from "styled-components";

const FiltersContainer = styled.div`
  border: 1px solid black;
  margin-top: 1rem;
  margin-left: 32rem;
  width: 20rem;
`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px;
`;

class FormPage extends React.Component {
  state = {
    nameValue: "",
    emailValue: "",
  };

  createUser = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "michael-soto-dumont",
          },
        }
      )
      .then((resposta) => {
        alert("Usuário criado com sucesso!!");
        //  console.log(resposta.data)
        this.setState({ nameValue: "", emailValue: "" });
      })
      .catch((error) => {
        // console.log(error.resposta.data);
        console.log(error.message);
      });
  };

  onChangeNameValue = (event) => {
    this.setState({ nameValue: event.target.value });
  };

  onChangeEmailValue = (event) => {
    this.setState({ emailValue: event.target.value });
  };

  render() {
    return (
      <div>
        <FiltersContainer>
          <InputContainer>
            Nome
            <input
              value={this.state.nameValue}
              onChange={this.onChangeNameValue}
            />
          </InputContainer>

          <InputContainer>
            Email
            <input
              value={this.state.emailValue}
              onChange={this.onChangeEmailValue}
            />
          </InputContainer>
        </FiltersContainer>

        <button onClick={this.createUser}>Criar Usuário</button>
      </div>
    );
  }
}

export default FormPage;
