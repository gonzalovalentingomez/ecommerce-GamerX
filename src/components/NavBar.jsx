import CartWidget from './CartWidget'
import ListComponent from './ListComponent'
import './NavBar.css'

export default function NavBar() {
    return (
        <header className='allNav'>
            <a href="index.html"><img src="src\imgs\logo-negro.png" alt="logo" className='imgLogo'/></a>
            <nav className='nav'>
                <ListComponent nombre="pc gamers"/>
                <ListComponent nombre="pc diseño"/>
                <ListComponent nombre="pc oficina"/>
                <ListComponent nombre="notebooks"/>
                <ListComponent nombre="monitores"/>
                <ListComponent nombre="perifericos"/>
            </nav>
            <CartWidget/>
        </header>
    )
}