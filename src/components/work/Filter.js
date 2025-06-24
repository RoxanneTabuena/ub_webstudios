import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { useComponentHeight } from '../../hooks/useComponentHeight'
import { NavButton } from '../../blocks/NavButton'
import style from './work.module.css'

export const Filter= ({handleFilterChange, handleAddFilter, handleRemoveFilter, active, filters}) => {
    // get header height to determine filter position
    const headerHeight = useOutletContext()
    // control filter display state
    const [open, setOpen] = useState()
    const [ filterRef, filterHeight] = useComponentHeight()
    // update filter height for clients positioning
    // deduce new path for filter selection
    const addFilterPath = (tag) => {
        return [...active, tag].map((t)=>{
            return t.replace(' ', '_')
        }).join('.')
    }
    const removeFilterPath = (tag) => {
        return active.filter((t)=>{
            return t !== tag
        }).map((t=>{
            return t.replace(' ', '_')
        })).join('.')
    }
    useEffect(()=>{
        handleFilterChange(filterHeight)
    }, [filterHeight])
    useEffect(()=>{

    }, [active])
    return (
        <div className={style.filter} ref={filterRef} style={{top: headerHeight+10}}>
            {active.map((tag)=>{
                return <NavButton
                            key={tag}
                            text={`x ${tag}`}
                            path={`/work/${removeFilterPath(tag)}`}
                            backgroundColor="fuchsia"
                            onclick={()=>{handleRemoveFilter(tag)}}
                        />
            })}
            {open? 
                <div>
                    <h3 onClick={()=>setOpen(false)}>project types:</h3>
                    {filters.map((tag)=>{
                        return <NavButton
                                    onclick={()=>{handleAddFilter(tag)}}
                                    key={tag}
                                    text={tag}
                                    path={`/work/${addFilterPath(tag)}`}
                                />
                    })}
                </div>
                :
                <button onClick={()=>setOpen(true)}>
                    view all filters
                </button>
            }
        </div>
    )
}