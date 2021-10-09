import React from "react";
// import FormPage from "./components/FormPage";
// import UserListPage from "./components/UserListPage";
import styled from "styled-components";
import "./App.css";
import axios from "axios";

const Header = styled.header`
  background-color: black;
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  color: white;
  height: 3rem;
  position: relative;
  top: -3rem;
`;

const DeleteButton = styled.span`
  color: red;
  margin-left: 10px;
`;

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const axiosConfig = {
  headers: {
    Authorization: "michael-soto-dumont",
  },
};

class App extends React.Component {
  state = {
    playlists: [],
    artistaValue: "",
    musicaValue: "",
    linkValue: "",
  };

  componentDidMount = () => {
    this.pegarPlaylists();
  };

  //PEGAR PLAYLIST
  pegarPlaylist = () => {
    axios
      .get(baseUrl, axiosConfig)
      .then((resposta) => {
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.artistaValue,
      music: this.state.musicaValue,
      audio: this.state.linkValue,
    };

    deleteUser = (userId) => {
      axios
      .delete(`${baseUrl}/${userId}`, axiosConfig)
      .then((resposta) => {
        this.setState({ playlists: resposta.data.result.list });
      this.pegarPlaylist();
      })
      .catch((error) => {
      console.log(error.message);
      });
      };
      
    //CRIAR PLAYLIST

    axios
      .post(baseUrl, axiosConfig)
      .then((resposta) => {
        this.setState({ artistaValue: "", musicaValue: "", linkValue: "" });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  onChangeArtistaValue = (event) => {
    this.setState({ artistaValue: event.target.value });
  };
  onChangeMusicaValue = (event) => {
    this.setState({ musicaValue: event.target.value });
  };
  onChangeLinkValue = (event) => {
    this.setState({ linkValue: event.target.value });
  };

  

  render() {
    const renderedPlaylists = this.state.playlists.map((playlist) => {
      return (
        <p key={playlist.id}>
          {playlist.name}
          <DeleteButton onClick={() => this.deleteUser(playlist.id)}>
            X
          </DeleteButton>
        </p>
      );
    });

    return (
      <div className="App">
        <div>
          <input
            placeholder="Nome do Artista"
            value={this.state.artistaValue}
            onChange={this.onChangeArtistaValue}
          />

          <input
            placeholder="Nome da Musica"
            value={this.state.musicaValue}
            onChange={this.onChangeMusicaValue}
          />

          <input
            placeholder="Link da musica"
            value={this.state.linkValue}
            onChange={this.onChangeLinkValue}
          />

          <button onClick={this.criarPlaylist}>Criar Playlist</button>
        </div>
        {renderedPlaylists}
      </div>
    );
  }
}

export default App;
