import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useOrientation } from '../../hooks/useOrientation'
import { Nav } from './nav/Nav'
import logo from '../../assets/img/Logo_white 2.png'
import style from './root.module.css'
export const Header = ({headerRef, scrollY}) => {
    const orientation = useOrientation()
    // control display style
    const [display, setDisplay] = useState('full')
    // control logo sizing
    const maxIcon = orientation === 'landscape' ? 125 : 69
    const minIcon = orientation === 'landscape' ? 69 : 33
    const [height, setHeight] = useState(`${maxIcon}px`)
    // shrink display on scroll, grow display as top of page approaches
    useEffect(()=>{
        const computeHeight = () => {
            return `${maxIcon-[[minIcon*scrollY]/maxIcon]}px`
        }
        if(scrollY===0 && display !=='full'){
            setDisplay('full')
            setHeight(`${maxIcon}px`)
        }else if(scrollY > 0 && scrollY<maxIcon){
            if(display !== 'mid'){
            setDisplay('mid')
            }
            setHeight(computeHeight())
        }else if(scrollY>= maxIcon && display !== 'mini'){
            setDisplay('mini')
            setHeight(`${minIcon}px`)
        }
    }, [scrollY])
    const full = (
        <header ref={headerRef}
        >
            <NavLink to="/" className={style.logo}>            
                <img 
                    src={logo} 
                    alt="unbound studio logo"
                    style={{
                        height: height,
                        aspectRatio: '1.7'
                    }}
                    ></img>
                <h3
                    style={{
                        fontSize: `${maxIcon/3.5}px`
                    }}
                >Web Studio</h3>
            </NavLink>
            <Nav iconHeight={height}/>
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
                        aspectRatio: '1.7',
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