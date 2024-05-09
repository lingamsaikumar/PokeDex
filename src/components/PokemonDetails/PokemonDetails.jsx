import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './PokemonDetails.css'
import usePokemon from "../../hooks/usePokemon";

function  PokemonDetails(){
    const {id} = useParams();
const [pokemon]=usePokemon(id);
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