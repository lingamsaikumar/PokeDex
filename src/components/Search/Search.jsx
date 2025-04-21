import './Search.css'
import useDebounce from '../../hooks/useDebounce'
// eslint-disable-next-line react/prop-types
function Search({updatesearchterm}) {
 let  debouncedUpdatedValue=useDebounce((e)=>updatesearchterm(e.target.value))
    return (
    <input type="text"  id="search-pokemon" placeholder="which pokemon you are looking for " onChange={debouncedUpdatedValue} />
    
    )
  }
  
  export default Search