import logo from '../assets/img/logo.png'
export default function Home() {
  return (
<>
  <div className='img-home'></div>
  <div className="container-logo">
    <img className='logo-pokemon' src={logo} alt="Logo Pokémon"/>
  </div>
  {/* <div className='buscador-pokemon'>
    <Buscador/>
  </div> */}
</>



  )
}
