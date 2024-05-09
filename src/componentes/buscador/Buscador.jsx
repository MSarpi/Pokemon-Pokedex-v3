import { useState, useEffect } from "react";
import Select from "react-select";
import { getPokemonList } from "../../assets/conexion/apiPokemon";
import PokemonModal from "../modal/ModalPokemon"; // Importa el componente del modal

export default function Buscador() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemonList("pokemon?limit=1025&offset=0");
      setPokemonList(data);
    }
    fetchData();
  }, []);

  const handleSelectChange = (selectedOption) => {
    setSelectedPokemon(selectedOption);
  };

  return (
    <>
      <Select
        options={pokemonList.map((pokemon) => ({
          value: pokemon.url.split("/")[6],
          label: `N° ${pokemon.url.split("/")[6]} - ${pokemon.name}`,
        }))}
        onChange={handleSelectChange}
        value={selectedPokemon}
        placeholder="Select Pokemon"
        className="mb-2"
        menuPosition="fixed"
      />
      <button className="boton" onClick={() => setSelectedPokemon(selectedPokemon)}>
        <ion-icon name="search"></ion-icon>
        <span>Buscar</span>
      </button>

      {selectedPokemon && (
        <PokemonModal
          selectedPokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </>
  );
}
