import { useEffect, useState } from 'react'
import { useOrientation } from '../../hooks/useOrientation'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import style from './landing.module.css'

export const PromoCard = ({title, src, text, queue, length, abort}) => {
    const [flip, setFlip] = useState(false)
    const orientation = useOrientation()
    const {width} = useWindowDimensions()
    const cardWidth = orientation === 'landscape' ? Math.floor([width*.9]/3): width*.75
    const cardStyle = {
        perspective: `${cardWidth*1.2}px`,
        width: `${cardWidth}px`,
        height: `${cardWidth*8/7}px`,
        margin: `${width*.01}px`,
        zIndex: `0px`
    }

    useEffect(()=>{
        if(!abort){
            if(orientation==='landscape'){
                const turn_1 = setTimeout(()=>{
                    setFlip(true)
                    const turn_2 = setTimeout(()=>{
                        setFlip(false)
                    }, 1500*[length-queue]+3000)
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
    },[queue, abort])

    return (
        <div className={style.cardContainer} style={cardStyle}>
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