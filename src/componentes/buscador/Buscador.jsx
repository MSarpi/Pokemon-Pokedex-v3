import { useState, useEffect } from "react";
import Select from "react-select";
import { getPokemonList } from "../../assets/conexion/apiPokemon";
import PokemonModal from "../modal/ModalPokemon"; // Importa el componente del modal
import ModalAlert from "../modal/ModalAlert";
import { useTranslation } from "react-i18next";
// import i18next from '../../translation/i18next'
export default function Buscador({ miniSidebar, darkMode }) {

  const { t } = useTranslation();

  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  
  const [showAlert, setShowAlert] = useState(false); 

  const handleShowModalAlert = () => setShowAlert(true);
  const handleCloseModalAlert = () => setShowAlert(false);

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

  const handleSearch = () => {
    if (!selectedPokemon) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  };

  return (
    <>
      {!miniSidebar && (
        <Select
          options={pokemonList.map((pokemon) => ({
            value: pokemon.url.split("/")[6],
            label: `N° ${pokemon.url.split("/")[6]} - ${pokemon.name}`,
          }))}
          onChange={handleSelectChange}
          value={selectedPokemon}
          placeholder={t('navbar_header.select')}
          className="mb-2"
          menuPosition="fixed"
        />
      )}
      {!miniSidebar && (
        <button className="boton" onClick={handleSearch}>
          <ion-icon name="search"></ion-icon>
          <span>{t('navbar_header.search')}</span>
        </button>
      )}
      
      {showAlert && <ModalAlert show={handleShowModalAlert} handleClose={handleCloseModalAlert} />}

      {selectedPokemon && (
        <PokemonModal
          selectedPokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
          darkMode={darkMode}
        />
      )}
    </>
  );
}
