import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PokemonList from './components/PokemonList';

//how many pokemon and what index to start at
//limit offset
const generations = [
  [0, 151, 0],
  [1, 100, 151],
  [2, 135, 251],
  [3, 107, 386],
  [4, 156, 493],
  [5, 72, 649],
  [6, 88, 721],
  [7, 87, 809],
];

function App() {
  //https://pokeapi.co/
  const [pokemon, setPokemon] = useState([]);
  const [generation, setGeneration] = useState(generations[0]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${generation[1]}&offset=${generation[2]}`)
    .then(res => {
      console.log(res);
      setPokemon(res.data.results);
    })
    .catch(err => console.log(err));
  }, [generation]);

  const handleClick = e => {
    switch (e.target.name) {
      case 'prev':
        setGeneration(generations[generation[0] - 1])
        break;
      case 'next':
        setGeneration(generations[generation[0] + 1])
        break;
      default:
        break;
    }
  }

  return (
    <Container>
      <div className='button-container'>
        {generation[2] === 0 ?
        <button disabled='disabled' >Previous Generation</button> :
        <button name='prev' onClick={handleClick} >Previous Generation</button>}
        <h1>Generation {generation[0] + 1} Pokemon</h1>
        {generation[2] === 809 ?
        <button disabled='disabled' >Next Generation</button> :
        <button  name='next' onClick={handleClick} >Next Generation</button>}
      </div>
      <PokemonList pokemon={pokemon} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 900px;
  }
`

export default App;
