const PokeCardInfo = ({ pokeInfo, interruptor }) => {
  let dibujador = interruptor;
  return (
    <div className="d-flex justify-content-center">
      {dibujador && (
        <div className="card card-box">
          <div className="d-flex gap-2 p-2">
            <img
              src={pokeInfo.sprites.other.home.front_default}
              className="card-img-top"
              alt={pokeInfo.name}
            />
            <div className="d-flex flex-column justify-content-between">
              <img
                src={pokeInfo.sprites.front_default}
                className="card-img-top"
                alt={pokeInfo.name}
              />
              <img
                src={pokeInfo.sprites.back_default}
                className="card-img-top"
                alt={pokeInfo.name}
              />
              <img
                src={pokeInfo.sprites.front_shiny}
                className="card-img-top"
                alt={pokeInfo.name}
              />
              <img
                src={pokeInfo.sprites.back_shiny}
                className="card-img-top"
                alt={pokeInfo.name + " shiny"}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center gap-2 align-items-center card-body">
            <img src="../../public/pngwing.com.png" className="title-pkball" alt="Open Pokeball" />
            <h5 className="display-4 text-center title-config m-0">{pokeInfo.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="d-flex gap-2 align-items-center list-group-item">
              <p className="m-0 h4 text-danger">❤</p>
              <p className="m-0">
                {pokeInfo.stats[0].stat.name}: {pokeInfo.stats[0].base_stat}
              </p>
            </li>
            <li className="d-flex gap-2 align-items-center list-group-item">
              <p className="h4 m-0 text-primary">⚔</p>
              <p className="m-0">
                {pokeInfo.stats[1].stat.name}: {pokeInfo.stats[1].base_stat}
              </p>
            </li>
            <li className="d-flex gap-2 align-items-center list-group-item">
              <p className="m-0">⚡</p>
              <p className="m-0">
                {pokeInfo.stats[5].stat.name}: {pokeInfo.stats[5].base_stat}
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PokeCardInfo;
