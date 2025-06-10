import { NavLink } from "react-router-dom"
export const Nav = () => {
    return (
        <nav>
            <NavLink to="/about">
                <h2>About</h2>
            </NavLink>
            <NavLink to="/services">
                <h2>Services</h2>
            </NavLink>
            <NavLink to="/pricing">
                <h2>Pricing</h2>
            </NavLink>
            <NavLink to="/work">
                <h2>Work</h2>
            </NavLink>
        </nav>
    )
}