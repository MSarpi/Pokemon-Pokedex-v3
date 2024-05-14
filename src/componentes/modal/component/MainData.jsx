import {  Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function MainData({pokemonInfo}) {
    const { t } = useTranslation();
    
    const formatearPeso = (peso) => {
        if (peso >= 10) {
          return (peso / 10).toFixed(1).replace('.', ',');
        }
        return `0,${peso}`;
      };
    
      const formatearAltura = (peso) => {
        if (peso >= 10) {
          return (peso / 10).toFixed(1).replace('.', ',');
        }
        return `0,${peso}`;
      };
    
    return (
        <div className="background-stats">
        <h4 style={{ textAlign: "center", marginTop: "10px" }}>{t('modal.data.tittle')}</h4>
        <hr/>

        <div>
        <ul style={{ listStyle:"none" }}>
            <li>
            <Row>
                <Col xs={6}  style={{ textAlign:"right" }}><strong>{t('modal.data.pokemonid')}:</strong></Col>
                <Col xs={6} >{pokemonInfo.id}</Col>
            </Row>
            </li>
            <li>
            <Row>
                <Col xs={6} style={{ textAlign:"right" }}><strong>{t('modal.data.weight')}:</strong></Col>
                <Col xs={6} >{formatearPeso(pokemonInfo.weight)}kg</Col>
            </Row>
            </li>
            <li>
            <Row>
                <Col xs={6} style={{ textAlign:"right" }}><strong>{t('modal.data.height')}:</strong></Col>
                <Col xs={6} >{formatearAltura(pokemonInfo.height)}m</Col>
            </Row>
            </li>
            <li>
            <Row>
                <Col xs={6} style={{ textAlign:"right" }}><strong>{t('modal.data.type')}:</strong></Col>
                <Col xs={6} >{pokemonInfo.types.length === 2 ? (
                <>
                    <span className={`background-${pokemonInfo.types[0].type.name} text-type-1`}>{pokemonInfo.types[0].type.name.charAt(0).toUpperCase() + pokemonInfo.types[0].type.name.slice(1)}</span>
                    <span className={`background-${pokemonInfo.types[1].type.name} text-type-2`}>{pokemonInfo.types[1].type.name.charAt(0).toUpperCase() + pokemonInfo.types[1].type.name.slice(1)}</span>
                </>

                ):(
                <>
                    <span className={`background-${pokemonInfo.types[0].type.name} text-type-only`}>{pokemonInfo.types[0].type.name}</span>
                </>
                )}
                </Col>
            </Row>
            </li>
            <li>
            <Row>
                <Col style={{ textAlign:"right" }}><strong>{t('modal.data.abilities')}:</strong></Col>
                <Col>
                {pokemonInfo.abilities.map((ability, index) => (
                    <span key={index}>
                    {index > 0 && " - "} 
                    {ability.ability.name}
                    </span>
                ))}
                </Col>
            </Row>
            </li>
        </ul>
        </div>
    </div>
    )
}
