import { useState, useEffect } from 'react'
import { Desk } from './Desk'
import { Mobile } from './Mobile'
import { Flyer } from './Flyer'
import style from './landing.module.css'

export const Formats = ({halt}) => {
    const [display, setDisplay] = useState(0)
    const displays = [ <Mobile/>, <Desk/>, <Flyer/>]

    useEffect(() => {
        if(!halt){
            const updateDisplay = setInterval(() => {
                setDisplay(prev=>{return prev === 2? 0: prev+1});
            }, 7000);
    
                return () => clearInterval(updateDisplay);
        }
        }, [halt]);
    return (
            <div className={style.formats}>
                {displays[display]}
            </div>
    )
}

