import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import "./styles/PokeIdPage.css"
import CardInfo from "../components/PokeIdPage/CardInfo";

const PokeIdPage = () => {
  const { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const [pokemon, getSinglePokemon] = useFetch(url);

  useEffect(() => {
    getSinglePokemon();
  }, [id]);

  console.log(pokemon);

  return (
    <article className="pokeidpage">
      <header>
      <div className="pokeidpage_header_red"> <Link to="/pokedex"><img className="pokeidpage_poke" src="/pokeimg.png" alt="texto de imagen"/></Link></div>
        <div className="pokeidpage_header_black"> <img className="pokeidpage_img" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png" alt="" /></div>
      </header>
      <div className="pokeidpage_body">
      <CardInfo
      pokemon={pokemon}
      id={id}
      />
      <section className="pokeidpage_movements">
        <h2 className="pokeidpage_movements_name">
          movements
        </h2>
        
       <div className="pokeidpage_movement">
       {pokemon?.moves.map(mov => (
        <span key={mov.move.url} className="pokeidpage_movemetns_span">
          {mov.move.name}
        </span>
      )) }
       </div>
      
      </section>
      </div>
    </article>
  );
};

export default PokeIdPage;


