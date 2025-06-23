import { Filter } from './Filter'
import { Clients } from './Clients'
import { useState } from 'react'
import style from './work.module.css'

export const Work = () => {
const [filterHeight, setFilterHeight] = useState(0)
const handleFilterChange = (height) => {
    setFilterHeight(height)
}
    return (
        <div className={style.work}>
            <Filter handleFilterChange={handleFilterChange}/>
            <Clients filterHeight={filterHeight}/>
        </div>
    )
}