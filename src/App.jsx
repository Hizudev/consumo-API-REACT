import { useState } from "react";
import ApiDeployer from "./components/ApiDeployer";
import Footer from "./components/Footer";
import PokeCardInfo from "./components/PokeCardInfo";
import pokeTittle from "./assets/imgs/pokeTittle.png";

const App = () => {
  const [pokeCard, setPokeCard] = useState({});
  const [paintSwitch, setPaintSwitch] = useState(false);

  const handleClick = async (url) => {
    const response = await fetch(url);
    const pokeInfo = await response.json();
    setPokeCard(pokeInfo);
    setPaintSwitch(true);
  };

  return (
    <section className="d-flex flex-column gap-5 p-3">
      <div className="header-poke d-flex gap-5 justify-content-center">
        <img src={pokeTittle} className="header-img" alt="Pokeball de titulo" />
        <h1 className=" display-1">React PokeDex</h1>
      </div>
      <ApiDeployer handleClick={handleClick} />
      <div className="d-flex justify-content-between h-100">
        <PokeCardInfo pokeInfo={pokeCard} interruptor={paintSwitch} />
        <Footer />
      </div>
      <div className="text-end">
        <h5 className="h2 m-0 title-config">
          Desarrollado por Nico Hndz (ADL G26 💚)
        </h5>
      </div>
    </section>
  );
};

export default App;
