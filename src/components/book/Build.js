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
            <h2>Build</h2>
            {build.map((item)=>{
            return <BuildItem 
                        key={item} 
                        item={item}
                        handleUpdatePromo={handleUpdatePromo}
                        handleRemoveBuild={handleRemoveBuild}/>
            })}
            <p>{`${format} total:${cost}`}</p>
            <p>estimated build time: {time} days</p>
            <p onClick={handleSwitchFormat}>switch pricing format</p>
        </div>
    )
}