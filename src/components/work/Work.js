import { useState } from 'react'
import { Filter } from './Filter'
import { Clients } from './Clients'
import { client_info } from './work.content'
import style from './work.module.css'

export const Work = () => {
// track filter height
const [filterHeight, setFilterHeight] = useState(0)
// generate filter list
const clientNames = Object.keys(client_info)
let tagsList = new Set()
clientNames.forEach((name)=>{
    client_info[name].tags.forEach(tag=>{
            tagsList.add(tag)
    })
    // LOGIC FOR ADDING FEATURE FILTERS
    // if(client_info[name].inDepth){
    //     client_info[name].inDepth.features.forEach(tag=>{
    //         tagsList.add(tag)
    //     })
    // }
})
// control filter options
const [filters, setFilters] = useState(Array.from(tagsList))
// control active filters
const [active, setActive] = useState([])

// update filter selection
const handleAddFilter = (tag) => {
    setFilters(filters.filter((filter)=>{
        return filter !== tag
    }))
    setActive([...active, tag])
}
const handleRemoveFilter = (tag) => {
    setFilters([...filters, tag])
    setActive(active.filter((filter)=>{
        return filter !== tag
    }))
}
// update global filter height
const handleFilterChange = (height) => {
    setFilterHeight(height)
}
    return (
        <div className={style.work}>
            <Filter 
                handleFilterChange={handleFilterChange}
                handleAddFilter={handleAddFilter}
                handleRemoveFilter={handleRemoveFilter}
                active={active}
                filters={filters}
            />
            <Clients 
                filterHeight={filterHeight}
                active={active}
            />
        </div>
    )
}