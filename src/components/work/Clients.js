import { useState, useEffect } from 'react'
import { client_info } from './work.content'
import { Client } from './Client'
import style from './work.module.css'

export const Clients = ({filterHeight, active}) => {
    const [feature, setFeature ] = useState(null)
    useEffect(()=>{},[feature])
    const handleSwitch = (client) => {
        setFeature(client)
    }
    let clientNames = Object.keys(client_info)
    if(active){
        active.forEach((tag)=>{
        clientNames = clientNames.filter((name)=> {
            return client_info[name].tags.includes(tag)
        })
    })}
    return ( 
        <div className={style.clients}
            style={{paddingTop: filterHeight}}>
            {clientNames.map((client)=>{
                return <Client 
                            title={client}
                            key={client}
                            info={client_info[client]}
                            featured = {feature===client? true : false}
                            handleSwitch={handleSwitch}
                        />})}
        </div>)}