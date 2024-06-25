import './NavBar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <CartWidget />
        </nav>
    );
}

export default NavBar;























/* import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

export default function NavBar() {
    return (
        <header className='allNav'>
            <Link to="/">
                <img src="\imgs\logo-blanco.png" alt="logo" className='imgLogo' />
            </Link>
            <nav className='nav'>
                <Link to='/'>Inicio</Link>
                <Link to='/category/pc´s'>PC's</Link>
                <Link to='/category/notebooks'>Notebooks</Link>
                <Link to='/category/monitores'>Monitores</Link>
                <Link to='/category/perifericos'>Perifericos</Link>
            </nav>
            <CartWidget />
        </header>
    );
}
 */