import { PromoInfo } from './PromoInfo'
import style from './book.module.css'

export const PromoInfoContainer = ({item, handleAddBuild, build}) => {

    return (
        <div className={style.promoInfoContainer}>
            <PromoInfo item={item} handleAddBuild={handleAddBuild} build={build}/>
        </div>
    )
}