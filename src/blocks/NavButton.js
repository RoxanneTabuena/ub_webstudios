import { NavLink } from "react-router-dom"
import style from './blocks.module.css'

export const NavButton = ({path, text, textColor, backgroundColor}) => {
    return (
            <NavLink to={path}>
                <button style={{
                    backgroundColor: backgroundColor
                }} className={style.navButton}>
                    <h3 style={{
                        color: textColor
                    }}>{text}</h3>
                </button>
            </NavLink>
    )
}