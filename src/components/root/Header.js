import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useOrientation } from '../../hooks/useOrientation'
import { Nav } from './nav/Nav'
import logo from '../../assets/img/Logo_white 2.png'
import style from './root.module.css'
export const Header = ({headerRef, logoRatio}) => {
    const orientation = useOrientation()
    // control display style
    const [display, setDisplay] = useState('full')
    // control logo sizing
    const [limit, setLimit] = useState(null)
    const maxIcon = orientation === 'landscape' ? 125 : 69
    const [height, setHeight] = useState(`${maxIcon}px`)
    // shrink display on scroll, grow display as top of page approaches
    useEffect(()=>{
        if(!limit){
            setLimit(logoRatio)
        }
        const computeHeight =()=>{
            if(logoRatio<0){
                return `${.45* maxIcon}px`
            }
            return `${[45+([35*logoRatio]/limit)]/100*maxIcon}px`
        }
        if(logoRatio<limit){
            setDisplay('mini')
            setHeight(computeHeight())
        }else{
            setDisplay('full')
        }
    }, [logoRatio, limit])
    const full = (
        <header ref={headerRef}
        >
            <NavLink to="/" className={style.logo}>            
                <img 
                    src={logo} 
                    alt="unbound studio logo"
                    style={{
                        height: `${maxIcon}px`,
                        aspectRatio: '1.7'
                    }}
                    ></img>
                <h3
                    style={{
                        fontSize: `${maxIcon/3.5}px`
                    }}
                >Web Studio</h3>
            </NavLink>
            <Nav iconHeight={`${maxIcon}px`}/>
        </header>
    )
    const mini = (
        <header ref={headerRef}>
            <NavLink to="/" className={style.logo}>            
                <img 
                    src={logo} 
                    alt="unbound studio logo"
                    style={{
                        height: height,
                        minWidth: height
                    }}
                ></img>
            </NavLink>
            <Nav iconHeight={height}/>
        </header>
    )
    return (
        <>
            {display === 'full' ? full : mini}
        </>
    )
}