import React, { Component,useEffect,useState } from 'react';
import TextoH1 from '../TextoH1';
import axios from 'axios';
const Pokemon  = ()=> {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(response=>{
            console.log(response.data.results)
            setPokemon(response.data.results)
        })
        .catch(error=>{
            console.log(error)
        })

      }, []);
    return(
        <div className="App">
        <h1>Pokemon API</h1>
            {pokemon.map((data)=>(
               <div key={data.name}>
               {data.name} - <a href={data.url}>Link Data Json</a>
               </div> 
            ))}
        </div>
    )
}

export default Pokemon;
