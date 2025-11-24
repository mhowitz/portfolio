import Navigation from './Navigation'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header className="w-full">
        <Link to="/">
            <h1 className="text-6xl text-pink-300 font-primary text-center p-8 drop-shadow-1x">
                Hi, I'm Mikayla Howitz
            </h1>
        </Link>
        <Navigation/>
    </header>
  )
}

export default Header
