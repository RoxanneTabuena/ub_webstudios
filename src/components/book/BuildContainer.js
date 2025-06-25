import style from './book.module.css'
import { Build } from './Build'

export const BuildContainer = ({build, handleUpdatePromo, handleRemoveBuild}) => {
    // toggle payment plan / lump sum
    return (
        <div className={style.buildContainer}>
            <Build 
                build={build} 
                handleUpdatePromo={handleUpdatePromo}
                handleRemoveBuild={handleRemoveBuild}/>
        </div>
    )
}