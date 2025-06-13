import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from './nav/Nav'
import logo from '../../assets/img/Logo_white 2.png'
import style from './root.module.css'
export const Header = ({headerRef, logoRatio}) => {
    // control display style
    const [display, setDisplay] = useState('full')
    // control logo sizing
    const [limit, setLimit] = useState(null)
    const [width, setWidth] = useState('100%')
    // shrink display on scroll, grow display as top of page approaches
    useEffect(()=>{
        if(!limit){
            setLimit(logoRatio)
        }
        const computeWidth =()=>{
            if(logoRatio<0){
                return '65%'
            }
            return `${65+([35*logoRatio]/limit)}%`
        }
        if(logoRatio<limit){
            setDisplay('mini')
            setWidth(computeWidth())
        }else{
            setDisplay('full')
        }
    }, [logoRatio, limit])
    const full = (
        <header ref={headerRef}
        >
            <NavLink to="/">            
                <img 
                    className={style.black}
                    src={logo} 
                    alt="unbound studio logo"
                    style={{
                        width: '100%'
                    }}
                    ></img>
                <h3>Web Studio</h3>
            </NavLink>
            <Nav className={style.black}
            
            />
        </header>
    )
    const mini = (
        <header ref={headerRef}>
            <NavLink to="/">            
                <img 
                    className={style.black}
                    src={logo} 
                    alt="unbound studio logo"
                    style={{
                        width: width
                    }}
                ></img>
            </NavLink>
            <Nav className={style.black}/>
        </header>
    )
    return (
        <>
            {display === 'full' ? full : mini}
        </>
    )
}