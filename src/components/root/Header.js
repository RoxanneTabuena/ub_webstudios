import { Nav } from './Nav'
import logo from '../../assets/img/Logo_white 2.png'
export const Header = ({headerRef}) => {
    return (
        <header ref={headerRef}>
            <img src={logo} alt="unbound studio logo"></img>
            <Nav />
        </header>
    )
}