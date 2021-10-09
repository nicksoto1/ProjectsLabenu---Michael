// import React from "react";
// import axios from "axios";
// import styled from "styled-components";


// const FiltersContainer = styled.div`
// /* background-color:#8D2A66; */
// border: 1px solid black;
// margin-top: 1rem;
// margin-left: 32rem;
// width: 20rem;
// `;

// const InputContainer = styled.label`
// display: flex;
// flex-direction: column;
// align-items: center;
// margin-bottom: 8px;
// padding: 8px;
// `;

// class FormPage extends React.Component {
// state = {
//   playlists: [],
//   artistaValue: "",
//   musicaValue: "",

// // createUser = () => {
// // const body = {
// // artista: this.state.artistaValue,
// // musica: this.state.musicaValue,
// // };
// }
// componentDidMount = () => {
//   this.pegarPlaylists();
// };

// pegarPlaylists = () => {
// axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
// headers: {
// Authorization: "michael-soto-dumont",
// },
// }) .then((resposta) => {
// alert("Musica adicionada com sucesso!");
// this.setState({ playlists: resposta.data.result.list });
// }) .catch((error) => {
// console.log(error.message);
// });
// };

// onChangeArtistaValue = (event) => {
// this.setState({ artistaValue: event.target.value });
// };

// onChangeMusicaValue = (event) => {
// this.setState({ musicaValue: event.target.value });
// };

// render() {
// return (
// <div>
// <FiltersContainer>
// <InputContainer>
// Artista
// <input
// value={this.state.artistaValue}
// onChange={this.onChangeArtistaValue}
// />
// </InputContainer>

// <InputContainer>
// Nome da música
// <input
// value={this.state.musicaValue}
// onChange={this.onChangeMusicaValue}
// />
// </InputContainer>

// <InputContainer>
// Link do áudio
// <input
// value={this.state.linkValue}
// onChange={this.onChangeLinkValue}
// />
// </InputContainer>
// </FiltersContainer>

// <button onClick={this.criarPla}>Criar Playlist</button>
// </div>
// );
// }
// }

// export default FormPage;
