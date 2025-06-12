import { useEffect } from 'react'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import style from './root.module.css'

export const Scroller = ({text, totalHeight, position, color, handleWidthChange, headerHeight}) => {
    const {height}= useWindowDimensions()
    const textHeight = (height-headerHeight)/text.length
    const textWidth = textHeight*.7
    const hlLength = 100*height/totalHeight
    const hlStart = 100*position/totalHeight
    useEffect(()=>{
        handleWidthChange(textWidth)
    }, [handleWidthChange, textWidth])
    
    return (
        <div className={style.scroller}
            style={{ top: headerHeight}}
        >
           <p
           style={{
            fontSize: `${textHeight}px`,
            width: `${textWidth}px`,
            backgroundImage: `linear-gradient(rgba(255,255,255,.05) ${hlStart}%, ${color}, rgba(255,255,255,.05) ${hlStart+hlLength}%, rgba(255,255,255,.05))`
           }}
           >{text}</p> 
        </div>
    )   
}