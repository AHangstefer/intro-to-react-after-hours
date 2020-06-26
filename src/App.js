import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PokemonList from './components/PokemonList';

function App() {
  //https://pokeapi.co/
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
    .then(res => {
      console.log(res);
      setPokemon(res.data.results);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <h1>Generation 1 Pokemon</h1>
      <PokemonList pokemon={pokemon} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default App;
