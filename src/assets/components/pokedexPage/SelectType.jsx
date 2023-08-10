import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const SelectType = ({ setSelectValue, setCurrentPage, setCardPerPage }) => {
  const url = "https://pokeapi.co/api/v2/type";

  const [types, getAllTypes] = useFetch(url);

  useEffect(() => {
    getAllTypes();
  }, []);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
    setCurrentPage(1);
  };

  const handleChangeCard = (e) => {
    setCardPerPage(e.target.value)
  }
  

  return (
    <div>
      <select onChange={handleChange}>
        <option value="allPokemons">All Pokemons</option>
        {types?.results.map((type) => (
          <option key={type.url} value={type.url}>
            {type.name}
          </option>
        ))}
      </select>
    <span>
    <select onChange={handleChangeCard}> 
        <option value="6">6</option>
        <option value="9">9</option>
        <option value="12">12</option>
        <option value="15">15</option>
      </select>
      <div> #card</div>
    </span>
    </div>
  );
};

export default SelectType;
