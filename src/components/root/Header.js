import { NavLink } from 'react-router-dom'
import { Nav } from './nav/Nav'
import logo from '../../assets/img/Logo_white 2.png'
export const Header = ({headerRef}) => {
    return (
        <header ref={headerRef}>
            <NavLink to="/">            
                <img src={logo} alt="unbound studio logo"></img>
                <h3>Web Studio</h3>
            </NavLink>
            <Nav />
        </header>
    )
}