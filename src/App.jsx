
import pokemonImage from './assets/img/pokemon.png';
function App() {

  return (
    <>
    <div className="menu">
        <ion-icon name="menu-outline"></ion-icon>
        <ion-icon name="close-outline"></ion-icon>
    </div>

    <div className="barra-lateral">
        <div>
            <div className="nombre-pagina">
                <img src={pokemonImage} width={'100%'} alt="Pokemon" />
            </div>
            <button className="boton">
                <ion-icon name="add-outline"></ion-icon>
                <span>Create new</span>
            </button>
        </div>

        <nav className="navegacion">
            <ul>
                <li>
                    <a href="#">
                        <ion-icon name="mail-unread-outline"></ion-icon>
                        <span>Inbox</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="star-outline"></ion-icon>
                        <span>Starred</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <span>Sent</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="document-text-outline"></ion-icon>
                        <span>Drafts</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="bookmark-outline"></ion-icon>
                        <span>Important</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <span>Spam</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="trash-outline"></ion-icon>
                        <span>Trash</span>
                    </a>
                </li>
            </ul>
        </nav>

        <div>
            <div className="linea"></div>

            <div className="modo-oscuro">
                <div className="info">
                    <ion-icon name="moon-outline"></ion-icon>
                    <span>Drak Mode</span>
                </div>
                <div className="switch">
                    <div className="base">
                        <div className="circulo">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


    <main>
        <h1>Contenido</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti iure nam aliquid debitis voluptatum reiciendis reprehenderit minus, et sed hic suscipit facilis enim totam. Nesciunt eveniet velit modi voluptates temporibus?</p>
        </main>
    </>
  )
}

export default App
