import { getPosFromHeight } from './landing.utils'
import { Standard } from './Standard'
import style from './landing.module.css'
import { deals_info } from './landing.content'

export const Deluxe = ({height}) => {
    const pos_info = getPosFromHeight(height)
    return (
            <div className={style.deluxe}>
                <Standard widthFactor={1.7} bottom={pos_info.b.bottom} right={pos_info.b.right} content={deals_info.b}/>
                <Standard widthFactor={2.2}  bottom={pos_info.c.bottom} right={pos_info.c.right} content={deals_info.c}/>
            </div>
    )
}

