import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { client_info } from './work.content'
import { Client } from './Client'

export const Clients = () => {
    const {filter} = useParams()
    const [feature, setFeature ] = useState(null)
    useEffect(()=>{},[feature])
    const handleSwitch = (client) => {
        setFeature(client)
    }
    const clientNames = Object.keys(client_info)
    let list = !filter ? clientNames : 
            clientNames.filter((name)=>{
                return client_info[name].tags.includes(filter)
            })
    return ( 
        <div>
            {list.map((client)=>{
                return <Client 
                            title={client}
                            key={client}
                            info={client_info[client]}
                            featured = {feature===client? true : false}
                            handleSwitch={handleSwitch}
                        />})}
        </div>)}