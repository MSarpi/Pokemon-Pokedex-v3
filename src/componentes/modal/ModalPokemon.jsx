import { useState, useEffect } from "react";
import { Modal, Button, Row, Col, Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import './style/modal.css'
export default function PokemonModal({selectedPokemon, onClose, darkMode}) {
  const [loading, setLoading] = useState(true);
  const [pokemonInfo, setPokemonInfo] = useState(null);
  
  const handleClose = () => {
    onClose();
  };
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

  const { t } = useTranslation();

  return (
    <Modal size="xl" show={!!selectedPokemon} onHide={handleClose} dialogClassName={darkMode ? "modal-dark" : ""}>
      
      <Modal.Header closeButton className="header-footer">
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
      <Modal.Body className="background-info">
      {loading ? (
        "Load"
        ) : (
          pokemonInfo && ( 
          <>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
            <div className={`background-${pokemonInfo.types[0].type.name}${pokemonInfo.types[1] ? `-${pokemonInfo.types[1].type.name}` : ''} background-common`}>
                {pokemonInfo.sprites.other['official-artwork'].front_shiny ? (
                <Carousel fade>
                <Carousel.Item>
                  <img src={pokemonInfo.sprites.other['official-artwork'].front_default} alt={pokemonInfo.name} width={"100%"}/>
                  <Carousel.Caption>
                    <h3>Original</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={pokemonInfo.sprites.other['official-artwork'].front_shiny} alt={pokemonInfo.name} width={"100%"}/>
                <Carousel.Caption>
                    <h3>Shiny</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                ):(
                  <Carousel fade>
                  <Carousel.Item>
                    <img src={pokemonInfo.sprites.other['official-artwork'].front_default} alt={pokemonInfo.name} width={"100%"}/>
                    {/* <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                  </Carousel.Item>
                  </Carousel>
                )}
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
            <div className="background-stats">
              <h4 style={{ textAlign: "center", marginTop: "10px" }}>{t('modal.data.tittle')}</h4>
              <hr/>

              <div>
                <ul style={{ listStyle:"none" }}>
                  <li>
                    <Row>
                      <Col style={{ textAlign:"right" }}><strong>Pokemon ID:</strong></Col>
                      <Col>{pokemonInfo.id}</Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col style={{ textAlign:"right" }}><strong>Peso:</strong></Col>
                      <Col>{pokemonInfo.weight}</Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col style={{ textAlign:"right" }}><strong>Altura:</strong></Col>
                      <Col>{pokemonInfo.height}</Col>
                    </Row>
                  </li>
                  {/* <li>Experiencia base: {pokemonInfo.base_experience}</li> */}
                  <li>
                    <Row>
                      <Col style={{ textAlign:"right" }}><strong>Tipo:</strong></Col>
                      <Col>{pokemonInfo.types.length === 2 ? `${pokemonInfo.types[0].type.name} / ${pokemonInfo.types[1].type.name}` : `${pokemonInfo.types[0].type.name}`}</Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col style={{ textAlign:"right" }}><strong>Habilidades:</strong></Col>
                      <Col>
                      {pokemonInfo.abilities.map((ability, index) => (
                      <span key={index}>
                        {index > 0 && " / "} 
                        {ability.ability.name}
                      </span>
                    ))}</Col>
                    </Row>
                    </li>
                </ul>
              </div>
            </div>

            </Col>
          </Row>
          <Row>
              <Col>
              <p>Movimientos:</p>
              <ul>
                {pokemonInfo.moves.slice(0, 5).map((move, index) => (
                  <li key={index}>{move.move.name}</li>
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
              </Col>
          </Row>
          </>
        )
        )
      }
      </Modal.Body>
      <Modal.Footer className="header-footer">
        <Button variant="primary" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
