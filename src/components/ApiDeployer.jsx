import { useEffect, useState } from "react";

const ApiDeployer = ({ handleClick }) => {
  const [pokeList, setPokeList] = useState([]);

  const getData = async (search) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${15*search}&limit=15`
      );
      const data = await response.json();
      setPokeList(()=> data.results);
    };
    
    useEffect(() => {
      getData();
    }, []);
    
  return (
    <nav
      className="d-flex flex-column gap-3"
      aria-label="Page navigation example"
    >
      <div className="d-flex justify-content-around">
        {pokeList.map((pokemon) => (
          <button
            key={pokemon.name}
            className="btn button-config"
            onClick={() => {
              handleClick(pokemon.url);
            }}
          >
            <h5 className="m-0">{pokemon.name}</h5>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default ApiDeployer;
