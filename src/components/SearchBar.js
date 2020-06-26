import React, { useState } from 'react';

const SearchBar = props => {
    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.setPokemon(props.pokemon.filter(mon => {
            console.log('this is mon in search bar', mon);
            return mon.name.includes(input);
        }));
    }

    const handleChange = e => {
        setInput(e.target.value);
        props.setPokemon(props.pokemon.filter(mon => {
            return mon.name.includes(e.target.value);
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={input} placeholder='Find Pokemon' onChange={handleChange} />
        </form>
    );
}

export default SearchBar;