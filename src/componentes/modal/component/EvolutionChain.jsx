import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function EvolutionChain({evolutionChain}) {
  const { t } = useTranslation();
  if (!evolutionChain || !evolutionChain.chain || !evolutionChain.chain.evolves_to.length) {
    return null;
  }
  const renderEvolution = (chain) => {
    const evolutions = [];
    let currentChain = chain;
  
    while (currentChain && currentChain.species) {
      evolutions.push(currentChain.species);
      currentChain = currentChain.evolves_to[0];
    }
  
    return evolutions;
  };
  
  const evolutionSteps = renderEvolution(evolutionChain.chain);
  return (
    <div className="background-stats">
      <h4 style={{ textAlign: "center", marginTop: "10px" }}>{t('modal.evolution.tittle')}</h4>
      <hr/>
      <div className="evolution-chain-images">
        <Row>
          {evolutionSteps.map((species, index) => (
            <Col key={index}>
              <div className="evolution-step">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${species.url.split('/').slice(-2, -1)[0]}.png`}
                  alt={species.name}
                />
                <br/>
                <p className="mb-1">
                  {species.name.charAt(0).toUpperCase() + species.name.slice(1)}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
