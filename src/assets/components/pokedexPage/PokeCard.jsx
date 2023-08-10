import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import '../styles/PokeCard.css'
const PokeCard = ({ url }) => {
    const [ pokemon, getPokemon] = useFetch(url)
  useEffect(() => {
    getPokemon()
  },[])
  const navigate = useNavigate()
const handleCLick = () => {
    navigate(`/pokedex/${pokemon.id}`)
}

const firtsType = pokemon?.types[0].type.name
    return (
    <div className="pokecard-container" >
    <article className={`pokecard ${firtsType}-border`} onClick={handleCLick}>
   <header className={`pokecard_header ${firtsType}-gradient `}> 
    <img className="pokecard_image" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
   </header>
   <section className="pokecard_body">
    <h3 className={`pokecard_name ${firtsType}-color  `}>{pokemon?.name}</h3>
    <ul className="pokecard_types">
        {
            pokemon?.types.map(pokInfo => (
               <li className="pokecard_typename" key={pokInfo.type.url} >{pokInfo.type.name}</li> 
            ))
        }
    </ul>
    <hr className="pokecard_hr" />
    <ul className="pokecard_stats">
        {
            pokemon?.stats.map(statsInfo => (
            <li className="pokecard_stat" key={statsInfo.stat.url} >
                <h4 className="pokecard_stat__name">{statsInfo.stat.name}</h4>
                <span className={`pokecard_stat__value ${firtsType}-color `}>{statsInfo.base_stat}</span>    
             </li>
            ))
        }
    </ul>
   </section>
    </article>
    </div>
  )
}
export default PokeCard