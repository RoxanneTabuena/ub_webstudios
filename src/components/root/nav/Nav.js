import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { MenuIcon } from "./MenuIcon"
import style from '../nav/nav.module.css'
export const Nav = () => {

    const expand = (
        <div className={style.menu}>
            <div>
                <NavLink to="/about">
                    <h2>About</h2>
                </NavLink>
                <NavLink to="/services">
                    <h2>Services</h2>
                </NavLink>
            </div>
            <div>
                <NavLink to="/pricing">
                    <h2>Pricing</h2>
                </NavLink>
                <NavLink to="/work">
                    <h2>Work</h2>
                </NavLink>
            </div>
            <MenuIcon open={true}/>
        </div>
    )
    const contract = (
        <MenuIcon open={false} />
    )
    return (
        <nav>
            {expand}
        </nav>
    )
}