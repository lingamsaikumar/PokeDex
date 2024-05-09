import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import './PokemonDetails.css'

function  PokemonDetails(){
    const [pokemon,setPokemon]=useState(null)
    const {id} = useParams();
    const POKEMON_DETAILS_URL=`https://pokeapi.co/api/v2/pokemon/`;
    async  function downloadPokemon(){
        const response =  await axios.get(POKEMON_DETAILS_URL+id);
        const pokemon = response.data;
        setPokemon(
            {
                name:pokemon.name,
                height:pokemon.height,
                weight:pokemon.weight,
                types:pokemon.types,
                image:pokemon.sprites.other.dream_world.front_default
            }
        ) 
    }
    useEffect(()=>{
        downloadPokemon();
    },[]);
 return  (
<>
<h1 className="Pokedex-redirect"><Link to ={'/'}>Pokedex</Link></h1>
    {pokemon&&<div  className="pokemon-details-wrapper"> 
    <div className="pokemon-detail-name">{pokemon.name}</div>
    <div>
        <img src={pokemon.image} alt="" />
    </div>
    <div className="pokemon-attr">
    <div>
        height:{pokemon.height}
        
    </div>
    <div>
    weight:{pokemon.weight}
    </div>
    </div>
    <div className="pokemon-types">

   <h1> Types: </h1>{pokemon.types.map( t=> <span className="type" key={t.type.name}>
    {t.type.name}
   </span>)}
    </div>
    </div>}
    </>
 )
}
export default PokemonDetails;