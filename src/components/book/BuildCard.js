import style from './book.module.css'
import { menu_info } from './book.content'

export const BuildCard = ({build, cost, time}) => {

    // toggle payment plan / lump sum
    return (
        <div className={style.buildCard}>
            <h2>Build</h2>
            {build.map((option)=>{
            return <p key={option}>{option}</p>
            })}
            <p>cost</p>
            <p>time</p>
        </div>
    )
}