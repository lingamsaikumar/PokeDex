import './Pokedex.css'
import '../PokemonList/PokemonList.jsx'
import Search from "../Search/Search.jsx"
import PokemonList from '../PokemonList/PokemonList.jsx'
import { useState } from 'react'
import PokemonDetails from '../PokemonDetails/PokemonDetails.jsx'
function Pokedex() {
  const [searchterm,setSearchterm]=useState('')
  return (
   <div
   className="pokedex-wrapper">
    <h1>Pokedex</h1>
   <Search  updatesearchterm={setSearchterm}/>
   {searchterm?<PokemonDetails PokemonName={searchterm}/>: <PokemonList/>}

   </div>

  )
}

export default Pokedex