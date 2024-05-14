import { Carousel } from "react-bootstrap";

export default function CarouselImg({pokemonInfo}) {
  return (
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
            </Carousel.Item>
            </Carousel>
        )}
  </div>
  )
}
