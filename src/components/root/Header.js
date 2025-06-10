import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from './nav/Nav'
import logo from '../../assets/img/Logo_white 2.png'
export const Header = ({headerRef, logoRatio}) => {
    const [limit, setLimit] = useState(null)
    const [display, setDisplay] = useState('full')
    const [width, setWidth] = useState('100%')
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
        <header ref={headerRef}>
            <NavLink to="/">            
                <img 
                    src={logo} 
                    alt="unbound studio logo"
                    style={{
                        width: '100%'
                    }}
                    ></img>
                <h3>Web Studio</h3>
            </NavLink>
            <Nav />
        </header>
    )
    const mini = (
        <header ref={headerRef}>
            <NavLink to="/">            
                <img 
                    src={logo} 
                    alt="unbound studio logo"
                    style={{
                        width: width
                    }}
                ></img>
            </NavLink>
            <Nav />
        </header>
    )
    return (
        <>
            {display === 'full' ? full : mini}
        </>
    )
}