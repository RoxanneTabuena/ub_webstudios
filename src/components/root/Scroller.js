import { useEffect } from 'react'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import style from './root.module.css'

export const Scroller = ({text, totalHeight, position, color, handleWidthChange}) => {
    const {height}= useWindowDimensions()
    const textHeight = height/text.length
    const textWidth = textHeight*.7
    const hlLength = 100*height/totalHeight
    const hlStart = 100*position/totalHeight
    useEffect(()=>{
        handleWidthChange(textWidth)
    }, [handleWidthChange, textWidth])
    
    return (
        <div className={style.scroller}>
           <p
           style={{
            fontSize: `${textHeight}px`,
            width: `${textWidth}px`,
            backgroundImage: `linear-gradient(transparent ${hlStart}%, ${color}, transparent ${hlStart+hlLength}%, transparent)`
           }}
           >{text}</p> 
        </div>
    )   
}