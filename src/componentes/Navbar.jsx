import { Route, Routes, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import links from "../data/links";
import pokemonImage from '../assets/img/pokemon.png';
import Home from '../screens/Home'
import Generacion_1 from '../screens/Generacion_1'
import Generacion_2 from '../screens/Generacion_2'

export default function Navbar() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" ? true : false
  );
  const [miniSidebar, setMiniSidebar] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

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
    setDarkMode(!darkMode);
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
            <div className="nombre-pagina">
              <img src={pokemonImage} width={"100%"} alt="pokemon" />
            </div>
            {/* <hr/> */}
            {/* <button className="boton">
              <ion-icon name="search"></ion-icon>
              <span>Buscar</span>
            </button> */}
          </div>

          <nav className="navegacion">
            <ul>
              {links.map((nav) => (
                <Link
                  onClick={toggleSidebar}
                  key={nav.id}
                  to={nav.href}
                  className={location.pathname === nav.href ? "active" : ""}
                >
                  <img src={darkMode && nav.legendary2 ? nav.legendary2 : nav.legendary} 
                    width={nav.width} 
                    alt={nav.name}  />
                  {nav.name}
                </Link>
              ))}
              {/* <li>
                <a href="#">
                  <ion-icon name="mail-unread-outline"></ion-icon>
                  <span>Inbox</span>
                </a>
              </li> */}
            </ul>
          </nav>

          <div>
            <div className="linea"></div>

            <div className="modo-oscuro" onClick={toggleDarkMode}>
              <div className="info">
                <span>Drak Mode</span>
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
