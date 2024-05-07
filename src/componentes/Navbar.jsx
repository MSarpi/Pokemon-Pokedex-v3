import { Route, Routes, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import links from "../data/links";
import pokemonImage from '../assets/img/pokemon.png';
import Home from '../screens/Home'
import Generacion_1 from '../screens/Generacion_1'
import Generacion_2 from '../screens/Generacion_2'
import Buscador from "./buscador/Buscador";

export default function Navbar() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Inicialmente se establece como falso

  useEffect(() => {
    // Leer el valor del localStorage al cargar el componente
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []); // Se ejecuta solo una vez al montar el componente

  const [miniSidebar, setMiniSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      if (window.innerWidth <= 320) {
        setMiniSidebar(true);
      }
    } else {
      setMiniSidebar(false);
    }
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    // Guardar el modo en localStorage
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <>
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <div className="menu" onClick={toggleSidebar}>
          <ion-icon
            name={showMenu ? "close-outline" : "menu-outline"}
          ></ion-icon>
        </div>

        <div
          className={`barra-lateral ${
            showMenu ? "max-barra-lateral" : ""
          } ${miniSidebar ? "mini-barra-lateral" : ""}`}
        >
          <div>
            <div className="nombre-pagina mt-3">
              <img src={pokemonImage} width={"100%"} alt="pokemon" />
            </div>
            <Buscador/>
          </div>

          <nav className="navegacion">
            <ul>
              {links.map((nav) => (
                <Link
                  onClick={toggleSidebar}
                  key={nav.id}
                  to={nav.href}
                  className={location.pathname === nav.href ? "active mb-2" : "mb-2"}
                >
                  <img
                    src={darkMode && nav.legendary2 ? nav.legendary2 : nav.legendary}
                    width={nav.width}
                    alt={nav.name}
                  />
                  <span className="p-2">{nav.name}</span>
                </Link>
              ))}
            </ul>
          </nav>

          <div>
            <div className="linea"></div>

            <div className="modo-oscuro" onClick={toggleDarkMode}>
              <div className="info">
                <span>Dark Mode</span>
              </div>
              <div className="switch">
                <div className={`base ${darkMode ? "dark-mode" : ""}`}>
                  <div
                    className={`circulo ${darkMode ? "prendido" : ""}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className={miniSidebar ? "min-main" : ""}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Generacion_1" element={<Generacion_1 />} />
            <Route path="/Generacion_2" element={<Generacion_2 />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
