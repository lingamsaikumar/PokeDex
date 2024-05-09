import { useState ,useEffect} from "react"
import downloadPokemons from "../utils/downloadPokemon"
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


  useEffect(()=>{
    downloadPokemons(PokemonListState,setPokemonListState,DEFAULT_URL);
  },[PokemonListState.POKEDEX_URL])
  
return [PokemonListState,setPokemonListState];
}
export default usePokemonList;