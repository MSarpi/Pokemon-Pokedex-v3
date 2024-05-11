import { imgHome, imgHome_darkmode, imgPokemon1, imgPokemon1_darkmode, imgPokemon2, imgPokemon2_darkmode, imgPokemon3, imgPokemon3_darkmode, imgPokemon4, imgPokemon4_darkmode, imgPokemon5, imgPokemon5_darkmode, imgPokemon6, imgPokemon6_darkmode, imgPokemon7, imgPokemon7_darkmode, imgPokemon8, imgPokemon8_darkmode, imgPokemon9, imgPokemon9_darkmode} from './import/img'
import {  Home, Generacion_1, Generacion_2, Generacion_3, Generacion_4, Generacion_5, Generacion_6, Generacion_7, Generacion_8, Generacion_9} from "./import/enlace"


const links = [
  {
    id: 1,
    width: "20%",
    name: "Home",
    legendary: imgHome,
    legendary2: imgHome_darkmode,
    href: "/",
    component: Home
  },
  {
    id: 2,
    width: "20%",
    name: "Generation I",
    legendary: imgPokemon1,
    legendary2: imgPokemon1_darkmode,
    href: "/Generacion_1",
    component: Generacion_1 
  },
  {
    id: 3,
    width: "20%",
    name: "Generation II",
    legendary: imgPokemon2_darkmode,
    legendary2: imgPokemon2,
    href: "/Generation_2",
    component: Generacion_2
  },
  {
    id: 4,
    width: "20%",
    name: "Generation III",
    legendary: imgPokemon3,
    legendary2: imgPokemon3_darkmode,
    href: "/Generacion_3",
    component: Generacion_3
  },
  {
    id: 5,
    width: "20%",
    name: "Generation IV",
    legendary: imgPokemon4,
    legendary2: imgPokemon4_darkmode,
    href: "/Generacion_4",
    component: Generacion_4
  },
  {
    id: 6,
    width: "20%",
    name: "Generation V",
    legendary: imgPokemon5_darkmode,
    legendary2: imgPokemon5,
    href: "/Generacion_5",
    component: Generacion_5
  },
  {
    id: 7,
    width: "20%",
    name: "Generation VI",
    legendary: imgPokemon6,
    legendary2: imgPokemon6_darkmode,
    href: "/Generacion_6",
    component: Generacion_6
  },
  {
    id: 8,
    width: "20%",
    name: "Generation VII",
    legendary: imgPokemon7,
    legendary2: imgPokemon7_darkmode,
    href: "/Generacion_7",
    component: Generacion_7
  },
  {
    id: 9,
    width: "20%",
    name: "Generation VIII",
    legendary: imgPokemon8,
    legendary2: imgPokemon8_darkmode,
    href: "/Generacion_8",
    component: Generacion_8
  },
  {
    id: 10,
    width: "20%",
    name: "Generation IX",
    legendary: imgPokemon9,
    legendary2: imgPokemon9_darkmode,
    href: "/Generacion_9",
    component: Generacion_9
  },
];

export default links;