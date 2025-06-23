import { useOrientation } from "../../../hooks/useOrientation"
import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { MenuIcon } from "./MenuIcon"
import style from '../nav/nav.module.css'
export const Nav = ({iconHeight, handleMenuToggle, open}) => {
    const orientation= useOrientation()
    const nav = [
        <NavLink to="/about">
            <h3 className={style.menuLink}>About</h3>
        </NavLink>,
        <NavLink to="/pricing">
            <h3 className={style.menuLink}>Pricing</h3>
        </NavLink>,
        <NavLink to="/services">
            <h3 className={style.menuLink}>Services</h3>
        </NavLink>,
        <NavLink to="/work">
            <h3 className={style.menuLink}>Work</h3>
        </NavLink>
    ]
    const expand = (
        <div className={style.menu}>
            <div className={style.mobMenu}>
                <div>{nav.slice(0,2)}</div>
                <div>{nav.slice(2,4)}</div>
            </div>

            <MenuIcon open={true} handleMenuToggle={handleMenuToggle} iconHeight={iconHeight}/>
        </div>
    )
    const contract = (
        <MenuIcon open={false} handleMenuToggle={handleMenuToggle} iconHeight={iconHeight}/>
    )
    if(orientation === 'landscape'){
        return(
            <nav className={style.deskMenu}>
                {nav}
            </nav>
        )
    }
    return (
        <nav>
            {open === true ? expand : contract} 
        </nav>
    )
}