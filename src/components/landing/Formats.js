import { useState, useEffect } from 'react'
import { Desk } from './Desk'
import { Mobile } from './Mobile'
import { Flyer } from './Flyer'
import style from './landing.module.css'

export const Formats = () => {
    const [display, setDisplay] = useState(0)
    const displays = [ <Mobile/>, <Desk/>, <Flyer/>]
    useEffect(()=>{
        const displaySwitch = setInterval(()=>{
            const next = display+1
            setDisplay(next === displays.length? 0 : next)
        },7000)
        return clearInterval(displaySwitch)
    },[display])
    return (
            <div className={style.formats}>
                {displays[display]}
            </div>
    )
}

