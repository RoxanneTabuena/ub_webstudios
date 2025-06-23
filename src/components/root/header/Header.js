import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useOrientation } from '../../../hooks/useOrientation'
import { Nav } from '../nav/Nav'
import { PageInfo } from './PageInfo'
import logo from '../../../assets/img/Logo_white 2.png'
import style from '../root.module.css'
export const Header = ({headerRef, scrollY}) => {
    const orientation = useOrientation()
    // control display style
    const [display, setDisplay] = useState('full')
    // control logo sizing
    const maxIcon = orientation === 'landscape' ? 125 : 69
    const minIcon = orientation === 'landscape' ? 69 : 33
    const [height, setHeight] = useState(maxIcon)
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
    useEffect(()=>{
        console.log(`open = ${open}`)
    },[open])
    // shrink display on scroll, grow display as top of page approaches
    useEffect(()=>{
        const computeHeight = () => {
            return maxIcon-[[minIcon*scrollY]/maxIcon]
        }
        if(scrollY<=0 && display !=='full'){
            setDisplay('full')
            setHeight(maxIcon)
        }else if(scrollY > 0 && scrollY<maxIcon){
            if(display !== 'mid'){
            setDisplay('mid')
            }
            setHeight(computeHeight())
        }else if(scrollY>= maxIcon && display !== 'mini'){
            setDisplay('mini')
            setHeight(minIcon)
        }
    }, [scrollY])
    const full = (
            <header ref={headerRef}>
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
            {!open && <PageInfo height={height} marginTop={false}/>}
            <Nav iconHeight={height} open={open} handleMenuToggle={handleMenuToggle}/>
        </header>
    )
    const mini = (
        <header>
            <div className={style.title}>
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
                {!open && <PageInfo height={height} marginTop={true}/>}
            </div>
            <Nav iconHeight={height}/>
        </header>
    )
    return (
        <>
            {display === 'full' ? full : mini}
        </>
    )
}