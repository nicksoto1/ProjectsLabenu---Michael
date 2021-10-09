import React from 'react';
import "./App.css";
import Post from './components/Post/Post'
import Match from './components/Match/Match';
import Header from './components/Header/Header';
import Botao from "./components/Botao/Botao";

function App() {

  return (
    <div>
    <div className="App">
     <Header />
     <div className="Linha">

     </div>

<Post />

<Botao />

    </div>
    <button>Limpar swipes e matches</button>
    </div>
    
  );
};

export default App;
