import { Row, Col, ProgressBar } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function BasicStatitics({pokemonInfo}) {
    const { t } = useTranslation();
    return (
        <div className="background-stats">
        <h4 style={{ textAlign: "center", marginTop: "10px" }}>{t('modal.statistics.tittle')}</h4>
        <hr/>

        <div>
          <ul style={{ listStyle:"none" }}>
            <li>
              <Row>
                <Col xs={4} style={{ textAlign: "right" }}>
                  <strong>{t('modal.statistics.hp')}:</strong>
                </Col>
                <Col xs={7}> 
                  <ProgressBar max={255} className="mt-1 custom-progress-bar" animated label={pokemonInfo.stats[0].base_stat} striped variant="success" now={pokemonInfo.stats[0].base_stat} />
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col xs={4} style={{ textAlign: "right" }}>
                  <strong>{t('modal.statistics.attack')}:</strong>
                </Col>
                <Col xs={7}>
                  <ProgressBar max={255} className="mt-1 custom-progress-bar" animated label={pokemonInfo.stats[1].base_stat} striped now={pokemonInfo.stats[1].base_stat} />
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col xs={4} style={{ textAlign: "right" }}>
                  <strong>{t('modal.statistics.attack_e')}:</strong>
                </Col>
                <Col xs={7}>
                  <ProgressBar max={255} className="mt-1 custom-progress-bar" animated label={pokemonInfo.stats[3].base_stat} striped variant="danger" now={pokemonInfo.stats[3].base_stat} />
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col xs={4} style={{ textAlign: "right" }}>
                  <strong>{t('modal.statistics.defense')}:</strong>
                </Col>
                <Col xs={7}>
                  <ProgressBar max={255} className="mt-1 custom-progress-bar" animated label={pokemonInfo.stats[2].base_stat} striped variant="" now={pokemonInfo.stats[2].base_stat} />
                </Col>
              </Row>
            </li>

            <li>
              <Row>
                <Col xs={4} style={{ textAlign: "right" }}>
                  <strong>{t('modal.statistics.defense_e')}:</strong>
                </Col>
                <Col xs={7}>
                  <ProgressBar max={255} className="mt-1 custom-progress-bar" animated label={pokemonInfo.stats[4].base_stat} striped variant="warning" now={pokemonInfo.stats[4].base_stat} />
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col xs={4} style={{ textAlign: "right" }}>
                  <strong>{t('modal.statistics.speed')}:</strong>
                </Col>
                <Col xs={7}>
                  <ProgressBar max={255} className="mt-1 custom-progress-bar" animated label={pokemonInfo.stats[5].base_stat} striped variant="info" now={pokemonInfo.stats[5].base_stat} />
                </Col>
              </Row>
            </li>
          </ul>
        </div>
      </div>
    )
}
