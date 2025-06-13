import { useOrientation } from "../../../hooks/useOrientation"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { MenuIcon } from "./MenuIcon"
import style from '../nav/nav.module.css'
export const Nav = () => {
    const orientation= useOrientation()
    const [open, setOpen] = useState(false)
    const {pathname} = useLocation()
    // close menu on path change
    useEffect(()=>{
        setOpen(false)
    },[pathname])
    // open and close menu on click
    const handleMenuToggle= () => {
        setOpen(!open)
    }
    const nav = [
        <NavLink to="/about">
            <h3>About</h3>
        </NavLink>,
        <NavLink to="/pricing">
            <h3>Pricing</h3>
        </NavLink>,
        <NavLink to="/services">
            <h3>Services</h3>
        </NavLink>,
        <NavLink to="/work">
            <h3>Work</h3>
        </NavLink>
    ]
    const expand = (
        <div className={style.menu}>
            <div className={style.mobMenu}>
                {nav}
            </div>

            <MenuIcon open={true} handleMenuToggle={handleMenuToggle}/>
        </div>
    )
    const contract = (
        <MenuIcon open={false} handleMenuToggle={handleMenuToggle}/>
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