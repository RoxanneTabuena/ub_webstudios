import style from './landing.module.css'
import { getWidthAsPercent } from './landing.utils'
export const Standard = ({widthFactor, bottom, right, content}) => {
    
    return (
            <div className={style.standard}
            style={{
                bottom: bottom,
                right: right,
                width: getWidthAsPercent(widthFactor)}}>
                    <h3>{content.text}</h3>
                    <p>for only</p>
                    <div className={style.price}>
                        <h2>{content.price}</h2>
                        <p>$</p>
                    </div>

            </div>
    )
}

