import { Nav } from './Nav'
import logo from '../../assets/img/Logo_white 2.png'
export const Header = ({headerRef}) => {
    return (
        <header ref={headerRef}>
            <div>
                <img src={logo} alt="unbound studio logo"></img>
                <h3>Web Studio</h3>
            </div>
            <Nav />
        </header>
    )
}