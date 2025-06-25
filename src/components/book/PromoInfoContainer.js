import { PromoInfo } from './PromoInfo'
import style from './book.module.css'

export const PromoInfoContainer = ({item, visible, handleAddBuild}) => {

    return (
        <div className={style.promoInfoContainer} style={{display: `${!visible? `hidden`: `auto`}`}}>
            <PromoInfo item={item} handleAddBuild={handleAddBuild}/>
        </div>
    )
}