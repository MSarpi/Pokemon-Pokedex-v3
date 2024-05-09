import { Route, Routes, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import links from "../data/links";
import pokemonImage from '../assets/img/pokemon.png';
import Buscador from "./buscador/Buscador";
import "../data/links"

export default function Navbar() {
  const location = useLocation();
  const [sidebar, setSidebar] = useState({
    showMenu: false,
    miniSidebar: localStorage.getItem("miniSidebar") === "true"
  });
  const [darkMode, setDarkMode] = useState(false); // Inicialmente se establece como falso

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  const toggleSidebar = () => {
    setSidebar({
      ...sidebar,
      showMenu: !sidebar.showMenu,
      miniSidebar: window.innerWidth <= 320 ? true : sidebar.miniSidebar
    });
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  const toggleMiniSidebar = () => {
    const newMiniSidebar = !sidebar.miniSidebar;
    setSidebar({
      ...sidebar,
      miniSidebar: newMiniSidebar
    });
    localStorage.setItem("miniSidebar", newMiniSidebar);
  };

  return (
    <>
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <div className="menu" onClick={toggleSidebar}>
          <ion-icon
            name={sidebar.showMenu ? "close-outline" : "menu-outline"}
          ></ion-icon>
        </div>

        <div
          className={`barra-lateral ${
            sidebar.showMenu ? "max-barra-lateral" : ""
          } ${sidebar.miniSidebar ? "mini-barra-lateral" : ""}`}
        >
          <div className="nombre-pagina mt-3 d-flex align-items-center">
            <img src={pokemonImage} width={"100%"} alt="pokemon"  onClick={toggleMiniSidebar}/>
          </div>
          <div>
            <Buscador miniSidebar={sidebar.miniSidebar} />
          </div>

          <div className="linea"></div>
          <nav className="navegacion mt-3">
            <ul>
              {links.map((nav) => (
                <li key={nav.id}>
                  <Link
                    onClick={toggleSidebar}
                    to={nav.href}
                    className={location.pathname === nav.href ? "active mb-2" : "mb-2"}
                  >
                    <img
                      src={darkMode && nav.legendary2 ? nav.legendary2 : nav.legendary}
                      width={sidebar.miniSidebar ? "100%" : nav.width}
                      alt={nav.name}
                    />
                    {!sidebar.miniSidebar && <span className="p-2">{nav.name}</span>}
                  </Link>
                </li>
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

        <main className={sidebar.miniSidebar ? "min-main" : ""}>
          <Routes>
            {links.map((ruta) => (
              <Route key={ruta.id} path={ruta.href} element={<ruta.component />} />
            ))}
          </Routes>
        </main>
      </div>
    </>
  );
}
