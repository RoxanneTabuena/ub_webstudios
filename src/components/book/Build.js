import { useState } from 'react'
import { BuildItem } from './BuildItem'
import { calculateCost, estimateTime } from './book.utils'
import style from './book.module.css'

export const Build = ({build, handleUpdatePromo, handleRemoveBuild}) => {
    const [format, setFormat] = useState("lumpSum")
    const cost = calculateCost(build, format)
    const time = estimateTime(build)
    const handleSwitchFormat = () => {
        setFormat(format === 'lumpSum' ? 'monthly' : 'lumpSum')
    }
    return (
        <div className={style.build}>
            <h2 className={style.buildInfo}>Build</h2>
            <div>
                {build.map((item)=>{
                return <BuildItem 
                            key={item} 
                            item={item}
                            handleUpdatePromo={handleUpdatePromo}
                            handleRemoveBuild={handleRemoveBuild}/>
                })}
            </div>
            <div className={style.buildInfo}>
                <p>{`${format} total:${cost}`}</p>
                <p>estimated build time: {time} days</p>
                <p onClick={handleSwitchFormat}>switch pricing format</p>
            </div>
        </div>
    )
}