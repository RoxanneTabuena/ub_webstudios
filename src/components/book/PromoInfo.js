import { PromoInfoCard } from './PromoInfoCard'
import style from './book.module.css'

export const PromoInfo = ({page, visible}) => {

    return (
        <div className={style.promoInfo} style={{display: `${!visible? `hidden`: `auto`}`}}>
            <PromoInfoCard page={page}/>
        </div>
    )
}