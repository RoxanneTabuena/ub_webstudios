import { useState, useEffect } from 'react'
import { useOutletContext, useLocation } from 'react-router-dom'
import { useComponentHeight } from '../../hooks/useComponentHeight'
import { client_info } from './work.content'
import { NavButton } from '../../blocks/NavButton'
import style from './work.module.css'

export const Filter= ({handleFilterChange}) => {
    // get current filters through pathname
    const {pathname} = useLocation()
    // get header height to determine filter position
    const headerHeight = useOutletContext()
    // control filter state
    const [open, setOpen] = useState()
    // list current filters
    const path = pathname.split('/').slice(2)
    const addTagToPath = (tag) => {
       if(!path.length){
        return tag
       }else{
        return `/work/${path}&&${tag}`
       }
    }
    // manage filters
    const filters = path.length? path[0].split('&&').map(tag=>{
        return tag.replace('%20', ' ')
    }) : path
    // generate filter list
    const clientNames = Object.keys(client_info)
    let tagsList = new Set()
    clientNames.forEach((name)=>{
        client_info[name].tags.forEach(tag=>{
            if(!filters.includes(tag)){
                tagsList.add(tag)
            }
        })
        // LOGIC FOR ADDING FEATURE FILTERS
        // if(client_info[name].inDepth){
        //     client_info[name].inDepth.features.forEach(tag=>{
        //         tagsList.add(tag)
        //     })
        // }
    })
    const removeTagFromPath = (tag) => {
        if(filters.length>1){
            let chunk = `&&${tag.replace(' ','%20')}`
            let newPath = path[0].replace(chunk, '')
            return `/work/${newPath}`
        }
        return `/work`
        }
    const [ filterRef, filterHeight] = useComponentHeight()
    // update filter height for clients positioning
    useEffect(()=>{
        handleFilterChange(filterHeight)
    }, [filterHeight])
    return (
        <div className={style.filter} ref={filterRef} style={{top: headerHeight+10}}>
            {filters.map((tag)=>{
                    console.log(removeTagFromPath(tag))
                    return <NavButton key={tag} path={removeTagFromPath(tag)} text={`X ${tag}`} size="small" backgroundColor={"fuchsia"}/>
                })}
            {open? 
                <div>
                    <h3 onClick={()=>setOpen(false)}>project types:</h3>
                        {Array.from(tagsList).map((tag, i)=>{
                            return (<p key={tag}>
                            <NavButton path={addTagToPath(tag)} text={tag} size={"small"} backgroundColor={"white"}/>
                            {i !== tagsList.size-1 && ","}
                                </p>)

                        })}
                </div>
                :
                <button onClick={()=>setOpen(true)}>
                    filter projects
                </button>
            }
        </div>
    )
}