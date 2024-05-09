import { useEffect,useState } from 'react';
import axios from 'axios';
import './PokemonList.css'
import Pokemon from '../Pokemon/Pokemon';

function PokemonList(){
    const DEFAULT_URL="https://pokeapi.co/api/v2/pokemon"
    const [PokemonList,setPokemonList]=useState([])
    const [POKEDEX_URL,setPOKEDEX_URL]=useState(DEFAULT_URL)
    const [NextPOKEDEX_URL,setNextPOKEDEX_URL]=useState(DEFAULT_URL)
    const [PrevPOKEDEX_URL,setPrevPOKEDEX_URL]=useState(DEFAULT_URL)
  



    async function downloadPokemons(){
        const response= await axios.get(POKEDEX_URL)
        setNextPOKEDEX_URL(response.data.next)
        setPrevPOKEDEX_URL(response.data.previous)
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
  setPokemonList(pokemonFinalListData)
}

  useEffect(()=>{
    downloadPokemons();
  },[POKEDEX_URL])


    return (
 
   <div  className='pokemon-list-wrapper'>
     <div  id='pokemon-list-header'>
        pokemonList
     </div>
     <div className='pokemon-controls'>
    <button onClick={()=>{
        setPOKEDEX_URL(PrevPOKEDEX_URL)
    }}>Prev</button>
    <button onClick={()=>{
        setPOKEDEX_URL(NextPOKEDEX_URL)
    }}>Next</button>
 </div>
     <div className='pokemon-list'> 

        {PokemonList.map(pokemon=> <Pokemon key={pokemon.id} name={pokemon.name} image={pokemon.image} id={pokemon.id}/>  )}
     </div>

   </div>
    );
}
export default  PokemonList;