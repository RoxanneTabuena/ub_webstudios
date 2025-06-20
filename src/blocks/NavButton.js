import { NavLink } from "react-router-dom"
import style from './blocks.module.css'

export const NavButton = ({path, text, textColor, backgroundColor, size, fontSize, font}) => {
    return (
            <NavLink to={path}>
                <button style={{
                    backgroundColor: backgroundColor
                }} className={`${style.navButton} ${style.size}`}>
                    <h4 style={{
                        color: textColor,
                        fontSize: `${fontSize && fontSize}`,
                        fontFamily: `${font? font : 'Text'}`
                    }}>{text}</h4>
                </button>
            </NavLink>
    )
}