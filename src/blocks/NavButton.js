import { NavLink } from "react-router-dom"
import style from './blocks.module.css'

export const NavButton = ({path, text, textColor, backgroundColor, size, fontSize, font}) => {
    const sizeStyle = size === 'large' ? style.large : style.small 
    return (
            <NavLink to={path}>
                <button style={{
                    backgroundColor: backgroundColor
                }} className={`${style.navButton} ${sizeStyle}`}>
                    <h4 style={{
                        color: textColor,
                        fontSize: `${fontSize && fontSize}`,
                        fontFamily: `${font? font : ''}`
                    }}>{text}</h4>
                </button>
            </NavLink>
    )
}