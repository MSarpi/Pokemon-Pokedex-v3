import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function PokemonModal({ selectedPokemon, onClose }) {
  const [loading, setLoading] = useState(true);
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    const getPokemonInfo = async (id) => {
      setLoading(true); // Aquí establecemos loading en true para mostrar "Load"
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemonInfo(data);
      setLoading(false); // Aquí establecemos loading en false para mostrar la información del Pokémon
    };

    if (selectedPokemon) {
      getPokemonInfo(selectedPokemon.value);
    }
  }, [selectedPokemon]);

  return (
    <Modal show={selectedPokemon !== null} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {loading ? (
            "Load"
          ) : (
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
            <p>Experiencia base: {pokemonInfo.base_experience}</p>
            <p>Habilidades:</p>
            <ul>
              {pokemonInfo.abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
            <p>Estadísticas base:</p>
            <ul>
              {pokemonInfo.stats.map((stat, index) => (
                <li key={index}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
            <p>Tipos:</p>
            <ul>
              {pokemonInfo.types.map((type, index) => (
                <li key={index}>{type.type.name}</li>
              ))}
            </ul>
            <p>Movimientos:</p>
            <ul>
              {pokemonInfo.moves.slice(0, 5).map((move, index) => (
                <li key={index}>{move.move.name}</li>
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
