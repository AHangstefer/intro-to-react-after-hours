import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PokemonCard = props => {
    const [pokeData, setPokeData] = useState({});
    useEffect(() => {
        axios.get(props.mon.url)
        .then(res => setPokeData(res.data))
        .catch(err => console.log(err));
    }, [props.mon]);
    return (
        <Container>
            <p className='poke-id'>{pokeData.id}</p>
            <div className='img-container'>
                {pokeData.sprites ? 
                <img alt={props.mon.name} src={pokeData.sprites.front_default} /> : 
                <p>loading image...</p>}
            </div>
            <h4>{props.mon.name}</h4>
            <p>Type(s): {pokeData.types ? 
                pokeData.types.map((obj, i) => <span key={i}>{obj.type.name} </span>) : 
                <span>Not sure. :(</span>}
            </p>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 360px;
    padding: 20px;
    border: 1px solid black;
    margin-bottom: 40px;
    .poke-id {
        margin: 0;
    }
    .img-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    img {
        margin: 0 auto;
        width: 320px;
    }
    h4 {
        font-size: 24px;
    }
`

export default PokemonCard;