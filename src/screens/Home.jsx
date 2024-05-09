import background from '../assets/img/background.jpg'
import logo from '../assets/img/logo.png'
export default function Home() {
  return (
    <div>
      <img className='img-home' src={background}/>
      <img className='overlay' src={logo}/>
    </div>
  )
}
