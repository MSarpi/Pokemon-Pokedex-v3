import { useState } from "react";
// import { IonIcon } from "@ionic/react";
import pokemonImage from './assets/img/pokemon.png';
// import './assets/NavbarJs.js' 
function App() {

    const [showMenu, setShowMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
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
      setDarkMode(!darkMode);
    };
  
    // const toggleMiniSidebar = () => {
    //   setMiniSidebar(!miniSidebar);
    // };
  
    return (
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <div className="menu" onClick={toggleSidebar}>
            <ion-icon name={showMenu ? "close-outline" : "menu-outline"}></ion-icon>
            {/* <ion-icon name={showMenu ? "menu-outline" : "close-outline"}></ion-icon> */}
        </div>
  
        <div className={`barra-lateral ${showMenu ? "max-barra-lateral" : ""} ${miniSidebar ? "mini-barra-lateral" : ""}`}>
          <div>
            <div className="nombre-pagina">
                <img src={pokemonImage} width={'100%'}/>
            </div>
            <button className="boton">
              {/* <IonIcon name="add-outline"></IonIcon> */}
              <span>Buscar</span>
            </button>
          </div>
  
          <nav className="navegacion">
            <ul>
              <li>
                <a id="inbox" href="#">
                  {/* <IonIcon name="mail-unread-outline"></IonIcon> */}
                  <span>Inbox</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {/* <IonIcon name="star-outline"></IonIcon> */}
                  <span>Starred</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {/* <IonIcon name="paper-plane-outline"></IonIcon> */}
                  <span>Sent</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {/* <IonIcon name="document-text-outline"></IonIcon> */}
                  <span>Drafts</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {/* <IonIcon name="bookmark-outline"></IonIcon> */}
                  <span>Important</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {/* <IonIcon name="alert-circle-outline"></IonIcon> */}
                  <span>Spam</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {/* <IonIcon name="trash-outline"></IonIcon> */}
                  <span>Trash</span>
                </a>
              </li>
            </ul>
          </nav>
  
          <div>
            <div className="linea"></div>
  
            <div className="modo-oscuro" onClick={toggleDarkMode}>
              <div className="info">
                {/* <IonIcon name="moon-outline"></IonIcon> */}
                <span>Drak Mode</span>
              </div>
              <div className="switch">
                <div className={`base ${darkMode ? "dark-mode" : ""}`}>
                  <div className={`circulo ${darkMode ? "prendido" : ""}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <main className={miniSidebar ? "min-main" : ""}>
          <h1>Contenido</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti iure nam aliquid
            debitis voluptatum reiciendis reprehenderit minus, et sed hic suscipit facilis enim
            totam. Nesciunt eveniet velit modi voluptates temporibus?
          </p>
          {/* Repeat the paragraph content to fill the page */}
        </main>
      </div>
    );
}

export default App
