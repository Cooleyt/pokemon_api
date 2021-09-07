import DisplayPokemon from './components/displayPokemon';
import { useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState("");
  const [newPokemon, setNewPokemon] = useState("");
  const [pokemons, setPokemons] = useState([]);

  const fetchAPI = () =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${newPokemon}?limit=807`)
      .then(res => res.json())
      .then(res => {
      setPokemons(res.results);
    })
      .catch(err => console.log(err));
  }
  
  const handleNewPokemonSubmit = (e) => {
    e.preventDefault();

    // const pokemonItem ={
    //   text: newPokemon,
    //   complete: false
    // }

    // setPokemons([...pokemons, pokemonItem]);
    // setNewPokemon("");
  };


  return (
    <div className="App">
      <h1>Pokemon API</h1>
      <form onSubmit = {(e) => {
        handleNewPokemonSubmit(e);
      }}>
      <div>
        <button onClick = {fetchAPI}>Fetch Pokemon</button>
      </div>
      {
        pokemons.length > 0 ? <DisplayPokemon pokemons = {pokemons}></DisplayPokemon>: null
      }
      </form>
      <hr />
    </div>
  );
}

export default App;
