import { BuildItem } from './BuildItem'
import style from './book.module.css'

export const Build = ({build, cost, time, handleUpdatePromo, handleRemoveBuild}) => {

    // toggle payment plan / lump sum
    return (
        <div className={style.build}>
            <h2>Build</h2>
            {build.map((item)=>{
            return <BuildItem 
                        key={item} 
                        item={item} 
                        handleUpdatePromo={handleUpdatePromo}
                        handleRemoveBuild={handleRemoveBuild}/>
            })}
            <p>{cost}</p>
            <p>{time}</p>
        </div>
    )
}