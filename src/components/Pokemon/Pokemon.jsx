// eslint-disable-next-line react/prop-types
import { Link } from 'react-router-dom';
import './Pokemon.css'
function Pokemon(prop){
    return (
      <Link to={`/pokemon/${prop.id}`} className="pokemon-wrapper" >
  <div className="pokemon">
 <h1>{prop.name}</h1>
    <img className="pokemon-image" src={prop.image} alt="" />
  </div>
  </Link>
    );
}
export default Pokemon;