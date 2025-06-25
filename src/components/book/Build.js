import style from './book.module.css'
import { BuildCard } from './BuildCard'

export const Build = ({build, cost, time}) => {
    // toggle payment plan / lump sum
    return (
        <div className={style.build}>
            <BuildCard build={build} cost={cost} time={time}/>
        </div>
    )
}