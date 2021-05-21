import { useState, useEffect } from 'react';
import logo from './logo.svg';
import Pokemon from "./components/Pokemon"
import './App.css';


function App() {

  const [ pokemon, setPokemon ] = useState({});

  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon/')
  //     .then(res => res.json())
  //     .then(res => setPokemon(res.results))
  // }, []);


  const getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(res => res.json())
      .then(res => setPokemon(res.results))
      .catch(err => console.log(err))
  }

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
      { pokemon.map((p, i) => {
          return <Pokemon
                    pokemon = {p}
                    key = {i}
                  />
        })
      }
    </div>
  );
}

export default App;
