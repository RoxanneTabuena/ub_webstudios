import { getPosFromHeight } from './landing.utils'
import { Standard } from './Standard'
import style from './landing.module.css'

export const Deluxe = ({height}) => {
    const pos_info = getPosFromHeight(height)
    return (
            <div className={style.deluxe}>
                <Standard widthFactor={1.7} bottom={pos_info.b.bottom} right={pos_info.b.right}/>
                <Standard widthFactor={2.2}  bottom={pos_info.c.bottom} right={pos_info.c.right}/>
            </div>
    )
}

