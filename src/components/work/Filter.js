import { useState, useEffect } from 'react'
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
        <div>
            <div className={style.filter}>
                <h3>site types:</h3>
                <div>
                    {Array.from(tagsList).map((tag)=>{
                        return <NavButton key={tag} path={`/work/${tag}`} text={tag} size={"small"} backgroundColor={"white"}/>

                    })}
                </div>
            </div>
        </div>
    )
}