
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './components/Pokedex/Pokedex.jsx'
import Pokedex from './components/Pokedex/Pokedex.jsx'
import  PokemonDetails from'./components/PokemonDetails/PokemonDetails.jsx'
function App() {


  return (
    <>
    <Routes>
      <Route path ="/" element={ <Pokedex/>}/>
      <Route path ="/pokemon/:id" element={ <PokemonDetails/>}/>
      <Route path ="*" element={<h1>page not found </h1>}/>
    </Routes>

    </>
  )
}

export default App
