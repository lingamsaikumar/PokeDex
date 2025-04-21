import axios from "axios";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import downloadPokemons from "../utils/downloadPokemon";
function usePokemon(PokemonName){
    const {id} = useParams();
    const [pokemon,setPokemon]=useState(null)
    const [PokemonListState,setPokemonListState]=useState(
        {
          PokemonList:[],
          POKEDEX_URL:'',
          NextPOKEDEX_URL:'',
          PrevPOKEDEX_URL:''
        }
      )
    const POKEMON_DETAILS_URL=`https://pokeapi.co/api/v2/pokemon/`;
    async  function downloadGivenPokemon(id){
        const response =  await axios.get(POKEMON_DETAILS_URL+((PokemonName)?PokemonName:id));
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
        const types = response.data.types.map(t=>t.type.name);
        return types[0]
        
    }
    async function downloadPokemonAndRelated(id){
     const type=await  downloadGivenPokemon(id);
     await downloadPokemons(PokemonListState,setPokemonListState,`https://pokeapi.co/api/v2/type/${type}`)
    }
    useEffect(()=>{
        downloadPokemonAndRelated(id);
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    },[id,PokemonName]);
    return [pokemon,PokemonListState]
}
export default usePokemon;