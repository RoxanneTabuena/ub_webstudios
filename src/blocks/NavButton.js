import { NavLink } from "react-router-dom"
import style from './blocks.module.css'

export const NavButton = ({path, text, textColor, backgroundColor, size}) => {
    return (
            <NavLink to={path}>
                <button style={{
                    backgroundColor: backgroundColor
                }} className={`${style.navButton} ${style.size}`}>
                    <h3 style={{
                        color: textColor
                    }}>{text}</h3>
                </button>
            </NavLink>
    )
}