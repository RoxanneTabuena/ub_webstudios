import { useIsVisible } from '../../hooks/useIsVisible'
import { useEffect, useState } from 'react'
import style from './work.module.css'
export const Client = ({
        title,
        info,
        featured,
        handleSwitch
    }) => {
    const {tags, description, site, logo, demo, demoAlt, color} = info
    const [bottomRef, bVisible] = useIsVisible({options:{
        threshold: 1
    }})
    const [topRef, tVisible] = useIsVisible({options:{
        threshold: 1
    }})
    useEffect(()=>{
        if(bVisible && tVisible){
            handleSwitch(title)
        }else if(featured){
            handleSwitch(null)
        }
    },[bVisible, tVisible, featured])
    const expand = (
        <div className={style.expand}>
            <img className={style.demo} src={demo} alt={demoAlt}></img>
            <h3>{title}</h3>
            {/* title, img, tags, description, visit */}
        </div>)
    const contract = (
        <div className={style.contract}>
            {/* demo, title, tags */}
            <img className={style.demo} src={demo} alt={demoAlt}></img>
            <h3>{title}</h3>
        </div>)
    return (
        <div className={style.client}
        style={{color: color}}
        >
            <span ref={topRef} className={style.top}></span>
            {}
            <span ref={bottomRef} className={style.bottom}></span>
        </div>
    )
}