import { NavLink } from "react-router-dom"
import style from './blocks.module.css'

export const NavButton = ({path, text, textColor, backgroundColor, size, fontSize, font, onclick}) => {
    const sizeStyle = size === 'large' ? style.large : style.small 
    return (
            <NavLink to={path}>
                <button onClick={onclick} style={{
                    backgroundColor: backgroundColor
                }} className={` ${sizeStyle} ${style.navButton}`}>
                    <h4 style={{
                        color: textColor,
                        fontSize: `${fontSize && fontSize}`,
                        fontFamily: `${font? font : ''}`
                    }}>{text}</h4>
                </button>
            </NavLink>
    )
}