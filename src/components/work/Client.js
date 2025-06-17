import { useIsVisible } from '../../hooks/useIsVisible'
import { useEffect } from 'react'
import style from './work.module.css'
export const Client = ({
        title,
        description,
        tags,
        site,
        logo,
        color,
        demo,
        featured,
        handleSwitch
    }) => {
    const [bottomRef, visible] = useIsVisible({options:{
        threshold: 1
    }})
    useEffect(()=>{
        if(visible){
            handleSwitch(title)
        }
    },[visible])
    useEffect(()=>{
        if(featured){

            console.log(title)
        }
    },[featured])
    const expand = (
        <div
            className={style.expand}
             style={{
                backgroundColor: color
            }}
        >
            <p>{title}</p>
            {/* title, img, tags, description, visit */}
        </div>)
    const contract = (
        <div className={style.contract}>
            {/* demo, title */}
        </div>)
    return (
        <div className={style.client}>
            {!featured? contract : expand}
            <span ref={bottomRef} className={style.bottom}></span>
        </div>
    )
}