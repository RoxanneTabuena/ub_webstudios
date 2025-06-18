import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { client_info } from './work.content'
import { Tag } from './Tag'
import { Client } from './Client'
import style from './work.module.css'

export const Work = () => {
    const [feature, setFeature ] = useState(null)
    const {filter} = useParams()
    const clientNames = Object.keys(client_info)
    let tagsList = new Set()
    clientNames.forEach((name, i)=>{
        client_info[name].tags.forEach(tag=>{
            tagsList.add(tag)
        })
    })
    useEffect(()=>{},[feature])
    const handleSwitch = (client) => {
        setFeature(client)
    }
    const mapClients = () => {
        let list = !filter ? clientNames : 
            clientNames.filter((name)=>{
                return client_info[name].tags.includes(filter)
            })
        return list.map((client)=>{
            return <Client 
                        title={client}
                        key={client}
                        info={client_info[client]}
                        featured = {feature===client? true : false}
                        handleSwitch={handleSwitch}
                    />
        })
    }
    return (
        <div className={style.work}>
            <div className={style.filter}>
                <h3>site types:</h3>
                {Array.from(tagsList).map((tag)=>{
                    return <Tag 
                            key={tag}
                            tag={tag}
                            />
                })}
            </div>
            {mapClients()}
        </div>
    )
}