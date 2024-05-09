
import './PokemonList.css'
import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../../hooks/usePokemonList';

function PokemonList(){
   const [PokemonListState,setPokemonListState] =usePokemonList();
    return (
 
   <div  className='pokemon-list-wrapper'>
     <div  id='pokemon-list-header'>
        pokemonList
     </div>
     <div className='pokemon-controls'>
    <button onClick={()=>{
       setPokemonListState((state)=>({...state,POKEDEX_URL:state.PrevPOKEDEX_URL}))
    }}>Prev</button>
    <button onClick={()=>{
      setPokemonListState((state)=>({...state,POKEDEX_URL:state.NextPOKEDEX_URL}))
    }}>Next</button>
 </div>
     <div className='pokemon-list'> 

        {PokemonListState.PokemonList.map(pokemon=> <Pokemon key={pokemon.id} name={pokemon.name} image={pokemon.image} id={pokemon.id}/>  )}
     </div>

   </div>
    );
}
export default  PokemonList;