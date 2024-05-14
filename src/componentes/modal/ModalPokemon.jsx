import { useState, useEffect } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import './style/modal.css'

import CarouselImg from "./component/CarouselImg";
import MainData from "./component/MainData";
import BasicStatitics from "./component/BasicStatitics";
import SwiperSlides from "./component/SwiperSlides";

export default function PokemonModal({selectedPokemon, onClose, darkMode}) {

  const [loading, setLoading] = useState(true);
  const [pokemonInfo, setPokemonInfo] = useState(null);
  
  const handleClose = () => {
    onClose();
  }; 
 
  useEffect(() => {
    const getPokemonInfo = async (id) => {
      setLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemonInfo(data);
      setLoading(false);
    };

    if (selectedPokemon) {
      getPokemonInfo(selectedPokemon.value);
    }
  }, [selectedPokemon]);

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
              <CarouselImg pokemonInfo={pokemonInfo}/>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <MainData pokemonInfo={pokemonInfo}/> 
              <br/>
              <BasicStatitics pokemonInfo={pokemonInfo}/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <SwiperSlides pokemonInfo={pokemonInfo}/>
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
