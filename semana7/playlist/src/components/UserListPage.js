
import axios from "axios";
import React from "react";
import styled from "styled-components";

const DeleteButton = styled.span`
color: red;
margin-left: 10px;
`

const baseUrl =
"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const axiosConfig = {
headers: {
Authorization: "michael-soto-dumont",
},
};

class UserListPage extends React.Component {


componentDidMount = () => {
this.pegarPlaylist();
};
pegarPlaylist = () => {
axios.post(baseUrl, axiosConfig)
.then((resposta) => {
this.setState({ playlists: resposta.data.result.list });
})
.catch((error) => {
console.log(error.message);
});
};

criarPlaylist = () => {
  const body = {
    name: this.state.playlistValue
  };
}

deleteUser = (userId) => {
axios
.delete(`${baseUrl}/${userId}`, axiosConfig)
.then((resposta) => {
alert("Usuário deletado com sucesso!");
this.pegarPlaylist();
})
.catch((error) => {
console.log(error.message);
});
};

render() {
const renderedPlaylists = this.state.playlists.map((playlist) => {
return (
<p key={playlist.id}>{playlist.name}
<DeleteButton onClick={() => this.deleteUser(playlist.id)}>
X
</DeleteButton>
</p>
);
});

return <div>{renderedPlaylists}</div>;
}
}


export default UserListPage;


 	