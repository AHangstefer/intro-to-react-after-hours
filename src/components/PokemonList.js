import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';
import SearchBar from './SearchBar';

const PokemonList = props => {
    //map over pokemon
    const [pokemon, setPokemon] = useState(props.pokemon);

    useEffect(() => {
        setPokemon(props.pokemon);
    }, [props.pokemon])
    return (
        <Container>
            <SearchBar pokemon={props.pokemon} setPokemon={setPokemon} />
            <div className='cards-container'>
                {pokemon.length > 0 ? pokemon.map((mon, i) => <PokemonCard key={i} mon={mon} />) : <p>Loading...</p>}
            </div>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    .cards-container {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    form {
        margin-bottom: 40px;
    }
`

export default PokemonList;