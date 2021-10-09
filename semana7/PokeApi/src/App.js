import React  from "react";
import './App.css';
import axios from "axios"
import styled from "styled-components";

const Container = styled.div`
font-size:20px;
background-color:red;
align-items:center;
display:flex;
justify-content:center;
height:5rem;
`

const Menu = styled.div`
background-color:black;
display:flex;
justify-content:center;
height:5rem;
`
const PokemonSelect = styled.select`
  display:flex;
  margin:1rem  40rem;
  justify-content:center;
`;

const Section = styled.section`
  display:flex;
position:relative;
top:17.7rem;
height:5rem;
  justify-content:center;
  background-color:black;
`;

const Footer = styled.footer`
background-color:red;
display:flex;
justify-content:center;
height:5rem;
margin-top:17.7rem;
align-items:center;
font-size:20px;
`



class App extends React.Component {
  state = {
    pokemonLista: [],
    selectedPokemonUrl: ""
  };

  componentDidMount() {
    this.buscarPokemons();
  }

  buscarPokemons = () => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=100&offset=700";
    
    axios.get(apiUrl).then((resposta) => {
      // handle success
      this.setState({ pokemonLista: resposta.data.results });
    });
  };

  onChangeSelect = (event) => {
    console.log("SELECIONOU ALGO", event.target.value);
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${event.target.value}`;
    axios.get(apiUrl).then((resposta) => {
      // handle success
      console.log("RESPOSTA POKEMON", resposta.data.sprites.front_default);
      this.setState({
        selectedPokemonUrl: resposta.data.sprites.front_default
      });
    });
  };

  render() {
    console.log(this.state.pokemonLista);
    const optionList = this.state.pokemonLista.map((pokemon) => {
      return <option key={pokemon.name}>{pokemon.name}</option>;
    });

    return (

      <div className="App">
          <Container >Projeto Pokedex</Container>
          <Menu></Menu>
        <PokemonSelect onChange={this.onChangeSelect}>
          {optionList}
        </PokemonSelect>
        <img src={this.state.selectedPokemonUrl} />
<Section>efe</Section>
        <Footer>By Michael Soto</Footer>
      </div>
    );
  }
}

export default App;
