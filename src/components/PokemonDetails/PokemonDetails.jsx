import { useParams } from "react-router-dom";
import Pokemon from '../Pokemon/Pokemon';
import { Link } from "react-router-dom";
import './PokemonDetails.css'
import usePokemon from "../../hooks/usePokemon";

function  PokemonDetails(){
    const {id} = useParams();
const [pokemon,PokemonListState]=usePokemon(id);

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
    <div className="similar-pokemons">

    <h1>Similar Pokemons </h1>
    <div className="pokemon-similar-boxes">
        {PokemonListState.PokemonList.length >0 &&
        PokemonListState.PokemonList.map((pokemon)=>  <Pokemon key={pokemon.id} name={pokemon.name} image={pokemon.image} id={pokemon.id}/> )}
    </div>
    </div>
    </>
 )
}
export default PokemonDetails;