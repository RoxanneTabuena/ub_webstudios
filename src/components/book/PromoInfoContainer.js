import { PromoInfo } from './PromoInfo'
import style from './book.module.css'

export const PromoInfoContainer = ({page, visible, handleAddBuild}) => {

    return (
        <div className={style.promoInfoContainer} style={{display: `${!visible? `hidden`: `auto`}`}}>
            <PromoInfo page={page} handleAddBuild={handleAddBuild}/>
        </div>
    )
}