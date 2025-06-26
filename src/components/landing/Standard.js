import style from './landing.module.css'
import { getWidthAsPercent } from './landing.utils'
export const Standard = ({widthFactor, bottom, right}) => {
    
    return (
            <div className={style.standard}
            style={{
                bottom: bottom,
                right: right,
                width: getWidthAsPercent(widthFactor)}}>

            </div>
    )
}

