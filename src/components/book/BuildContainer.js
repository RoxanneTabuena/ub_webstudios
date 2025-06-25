import style from './book.module.css'
import { Build } from './Build'

export const BuildContainer = ({build, cost, time, handleUpdatePromo, handleRemoveBuild}) => {
    // toggle payment plan / lump sum
    return (
        <div className={style.buildContainer}>
            <Build 
                build={build} 
                cost={cost} 
                time={time}
                handleUpdatePromo={handleUpdatePromo}
                handleRemoveBuild={handleRemoveBuild}/>
        </div>
    )
}