import axios from "axios";
async function downloadPokemons(PokemonListState,setPokemonListState,defaultUrl,limit=20){
    const response= await axios.get(PokemonListState.POKEDEX_URL?PokemonListState.POKEDEX_URL:defaultUrl)
    setPokemonListState(()=>({...PokemonListState,NextPOKEDEX_URL:response.data.next,PrevPOKEDEX_URL:response.data.previous}))
    let pokemonResults=response.data.results?response.data.results:response.data.pokemon;
    pokemonResults=pokemonResults.slice(0,limit)
   const pokemonPromise=pokemonResults.map((p)=>{
    if(p.url){
        return axios.get(p.url)
    }else if(p.pokemon.url)

        return axios.get(p.pokemon.url)
   });
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
export default downloadPokemons;