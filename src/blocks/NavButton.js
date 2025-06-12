import { NavLink } from "react-router-dom"
import style from './blocks.module.css'

export const NavButton = ({path, text}) => {
    return (
            <NavLink to={path}>
                <button className={style.navButton}>{text}</button>
            </NavLink>
    )
}