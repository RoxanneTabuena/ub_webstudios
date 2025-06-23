import { useOrientation } from "../../../hooks/useOrientation"
import { NavLink } from "react-router-dom"
import { MenuIcon } from "./MenuIcon"
import style from '../nav/nav.module.css'
export const Nav = ({iconHeight, handleMenuToggle, open}) => {
    const orientation= useOrientation()
    const nav = [
        <NavLink to="/about" key={"about"}>
            <h3 className={style.menuLink}>About</h3>
        </NavLink>,
        <NavLink to="/pricing" key={"pricing"}>
            <h3 className={style.menuLink}>Pricing</h3>
        </NavLink>,
        <NavLink to="/services" key={"services"}>
            <h3 className={style.menuLink}>Services</h3>
        </NavLink>,
        <NavLink to="/work" key={"work"}>
            <h3 className={style.menuLink}>Work</h3>
        </NavLink>
    ]
    const expand = (
        <div className={style.menu}>
            <div className={style.mobMenu}
             style={{right: iconHeight+10}}>
                <div>{nav.slice(0,2)}</div>
                <div>{nav.slice(2,4)}</div>
            </div>

            <MenuIcon open={open} iconHeight={iconHeight} handleMenuToggle={handleMenuToggle}/>
        </div>
    )
    const contract = (
        <MenuIcon open={open} iconHeight={iconHeight} handleMenuToggle={handleMenuToggle}/>
    )
    if(orientation === 'landscape'){
        return(
            <nav className={style.deskMenu}>
                {nav}
            </nav>
        )
    }
    return (
        <nav onClick={handleMenuToggle}>
            {open === true ? expand : contract} 
        </nav>
    )
}