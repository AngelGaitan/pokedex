import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/pokedexPage/PokeCard"
import axios from "axios"
import SelectType from "../components/pokedexPage/SelectType"
import './styles/Pokedex.css'
import Pagination from "../components/pokedexPage/Pagination"
const Pokedex = () => {
  const trainer = useSelector(reducer => reducer.trainer)
  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1280'
  const [pokemons, getAllPokemons, getPokemonsByType] = useFetch(url)
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('allPokemons')
  const [cardPerPage, setCardPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)
  const cbFilter = poke => poke.name.includes(inputValue)
  const totalCard = pokemons?.results.filter(cbFilter).length
  const lastIndex = currentPage * cardPerPage
  const firstIndex = lastIndex - cardPerPage

  
  useEffect(() => {
    if (selectValue === 'allPokemons') {
      getAllPokemons()
    } else{
      getPokemonsByType(selectValue)
    }
  },[selectValue])

console.log(pokemons)
const inputSearch = useRef()


const handleSubmit = e => {
e.preventDefault()
setInputValue(inputSearch.current.value.trim().toLowerCase())
setCurrentPage(1)
}
console.log(inputValue)



return (
    <div>
       <header className="pokedex_header">
        <div className="pokedex_header_red"></div>
        <div className="pokedex_header_black"> <img className="pokedeximg" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png" alt="" /></div>
    </header>
        <p className="pokedex_p"><span className="pokedex_trainer">Welcome {trainer}, </span> here you can find favorite pokemon</p>
        
        <div className="pokedex_form_container">

        <form className="pokedex_form" onSubmit={handleSubmit}>
          <input className="pokedex_form_input"  ref={inputSearch} type="text" />
          <button className="pokedex_form_btn">Search</button>
        </form>
        <SelectType 
        setSelectValue={setSelectValue}
        setCurrentPage={setCurrentPage}
        setCardPerPage={setCardPerPage}
        />
        </div>
        <Pagination
        cardPerPage={cardPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCard={totalCard}
       
        />
        <div className="pokedex_container">
            {
                pokemons?.results.filter(cbFilter).map(poke => (
                <PokeCard
                key={poke.url}
                url = {poke.url}
                />)).slice(firstIndex, totalCard <= cardPerPage ? totalCard : lastIndex)
            }
        </div>
        <Pagination
        cardPerPage={cardPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCard={totalCard}
       
        />
    </div>
  )
}

export default Pokedex