import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = props => {
    const [pokemonName, setPokemonName] = useState([]);
    useEffect( () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => {
                console.log(response.data.results);
                setPokemonName(response.data.results);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1>Axios Pokemon API</h1>
            <ul>
                {pokemonName.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Pokemon;