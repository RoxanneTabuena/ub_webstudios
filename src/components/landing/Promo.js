import { promo_info } from './landing.content'
import { PromoCard } from './PromoCard'
import style from './landing.module.css'

export const Promo = () => {
    const titleList = Object.keys(promo_info)
    const cards = titleList.map((title, i)=>{
        return <PromoCard 
                    title={title} 
                    text={promo_info[title].text} 
                    src={promo_info[title].src}
                    key={`${title}${i}`}
                    queue={i+1}
                    length={titleList.length}
                    />
    })
    return (
        <div className={style.promo}>
            {cards}
        </div>
    )
}