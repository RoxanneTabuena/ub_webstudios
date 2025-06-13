import { useEffect, useState } from 'react'
import { useOrientation } from '../../hooks/useOrientation'
import style from './landing.module.css'

export const PromoCard = ({title, src, text, queue, length}) => {
    const [flip, setFlip] = useState(false)
    const [abort, setAbort] = useState(false)
    const orientation = useOrientation()

    useEffect(()=>{
        if(!abort){
            if(orientation==='landscape'){
                const turn_1 = setTimeout(()=>{
                    setFlip(true)
                    const turn_2 = setTimeout(()=>{
                        setFlip(false)
                    }, 1500*[length-queue]+4500)
                    return() => clearTimeout(turn_2)
                }, queue*1500)
                return () => clearTimeout(turn_1)
            }
            else{
                const turn = setTimeout(()=>{
                    setFlip(true)
                }, 1200)
                return ()=> clearTimeout(turn)
            }
        }
    },[queue])
    return (
        <div className={style.cardContainer} onMouseEnter={()=>{setAbort(true)}}>
            <div className={`${style.promoCard} ${flip ? style.flipped : ''}`}>
                <div className={style.cardFront}>
                    <img src={src} alt={`${title} icon`} />
                </div>
                <div className={style.cardBack}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}