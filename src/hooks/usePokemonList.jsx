import axios from "axios"
import { useState ,useEffect} from "react"
function usePokemonList(){
    const DEFAULT_URL="https://pokeapi.co/api/v2/pokemon"
    const [PokemonListState,setPokemonListState]=useState(
      {
        PokemonList:[],
        POKEDEX_URL:DEFAULT_URL,
        NextPOKEDEX_URL:DEFAULT_URL,
        PrevPOKEDEX_URL:DEFAULT_URL
      }
    )
    async function downloadPokemons(){
        const response= await axios.get(PokemonListState.POKEDEX_URL)
        setPokemonListState(()=>({...PokemonListState,NextPOKEDEX_URL:response.data.next,PrevPOKEDEX_URL:response.data.previous}))
        const pokemonResults=response.data.results
       const pokemonPromise=pokemonResults.map((pokemon)=>axios.get(pokemon.url));
       const pokemonListData=await axios.all(pokemonPromise);
      const pokemonFinalListData = pokemonListData.map((pokemondata)=>{
    const pokemon = pokemondata.data;
    return {
        id : pokemon.id,
        name : pokemon.name,
        types : pokemon.types,
        image : pokemon.sprites.other.dream_world.front_default
    }
  })
  setPokemonListState((state)=>({...state,PokemonList:pokemonFinalListData}))
}

  useEffect(()=>{
    downloadPokemons();
  },[PokemonListState.POKEDEX_URL])
  
return [PokemonListState,setPokemonListState];
}
export default usePokemonList;