import { useState, useEffect } from 'react';
import logo from './logo.svg';
import Pokemon from "./components/Pokemon"
import './App.css';
import axios from 'axios';


function App() {

  const [ pokemon, setPokemon ] = useState({});

  const getPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(res => {
        setPokemon(res.data.results)
      })
  }


  // const getPokemon = () => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
  //     .then(res => res.json())
  //     .then(res => setPokemon(res.results))
  //     .catch(err => console.log(err))
  // }

  return (
    <div className="parent-div">
      <div className="main-content-div">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <button className="button" onClick={ getPokemon }>
          Catch 'Em All
        </button>
      </div>
      { pokemon ?
        pokemon.map((p, i) => {
          return <Pokemon
                    pokemon = {p}
                    key = {i}
                  />
        }) : <div></div>
      }
    </div>
  );
}

export default App;
