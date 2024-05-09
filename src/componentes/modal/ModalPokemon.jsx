import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ModalPokemon({ selectedPokemon, onClose }) {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    const getPokemonInfo = async (id) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemonInfo(data);
    };

    if (selectedPokemon) {
      getPokemonInfo(selectedPokemon.value);
    }
  }, [selectedPokemon]);

  return (
    <Modal show={selectedPokemon !== null} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {pokemonInfo && (
            <>
              {pokemonInfo.name.toUpperCase()} - N° {pokemonInfo.id}
            </>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {pokemonInfo && (
          <>
            <img src={pokemonInfo.sprites.front_default} alt={pokemonInfo.name} />
            <p>Altura: {pokemonInfo.height}</p>
            <p>Peso: {pokemonInfo.weight}</p>
            <p>Tipo(s):</p>
            <ul>
              {pokemonInfo.types.map((type, index) => (
                <li key={index}>{type.type.name}</li>
              ))}
            </ul>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
