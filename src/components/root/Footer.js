import { NavLink } from "react-router-dom"
import style from './root.module.css'
export const Footer = () => {
    return (
        <footer>
            <NavLink to="/book">
                <button >Book</button>
            </NavLink>
        </footer>
    )
}