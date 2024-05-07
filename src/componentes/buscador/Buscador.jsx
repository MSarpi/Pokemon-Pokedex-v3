import { useState, useEffect } from "react";
import Select from "react-select";

export default function Buscador() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0")
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results))
      .catch((error) => console.log(error));
  }, []);

  const handleSelectChange = (selectedOption) => {
    setSelectedPokemon(selectedOption);
  };

  const handleSearch = () => {
    if (selectedPokemon) {
      // Aquí puedes hacer algo con el Pokemon seleccionado
      alert("Seleccionaste: " + selectedPokemon.label);
    }
  };

  const options = pokemonList.map((pokemon) => {
    const id = pokemon.url.split("/")[6];
    return { value: id, label: `N° ${id} - ${pokemon.name}` };
  });

  return (
    <>
      <Select
        options={options}
        onChange={handleSelectChange}
        value={selectedPokemon}
        placeholder="Select Pokemon"
        className="mb-2"
      />
      <button className="boton" onClick={handleSearch}>
        <ion-icon name="search"></ion-icon>
        <span>Buscar</span>
      </button>
    </>
   
  );
}
