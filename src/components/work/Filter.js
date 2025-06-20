import { useState } from 'react'
import { client_info } from './work.content'
import { NavButton } from '../../blocks/NavButton'
import style from './work.module.css'

export const Filter= () => {
    // control filter state
    const [open, setOpen] = useState()
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
    return (
        <div className={style.filter}>
            {open? 
                <div>
                    <h3 onClick={()=>setOpen(false)}>project types:</h3>
                        {Array.from(tagsList).map((tag, i)=>{
                            return (<p key={tag}>
                            <NavButton path={`/work/${tag}`} text={tag} size={"small"} backgroundColor={"white"}/>
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