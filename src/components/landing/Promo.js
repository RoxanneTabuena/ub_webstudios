import { useState } from 'react'
import { promo_info } from './landing.content'
import { PromoCard } from './PromoCard'
import style from './landing.module.css'

export const Promo = () => {
    const [abort, setAbort] = useState(false)
    const titleList = Object.keys(promo_info)
    const cards = titleList.map((title, i)=>{
        return <PromoCard 
                    title={title} 
                    text={promo_info[title].text} 
                    src={promo_info[title].src}
                    key={`${title}${i}`}
                    queue={i+1}
                    length={titleList.length}
                    abort={abort}
                    />
    })
    return (
        <div className={style.promo} onMouseEnter={()=>{setAbort(true)}}>
            {cards}
        </div>
    )
}