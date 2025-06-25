import { useState, useEffect } from 'react'
import { Menu } from './Menu'
import { Promo } from './Promo'
import { BuildContainer } from './BuildContainer'
import {PromoInfoContainer} from './PromoInfoContainer'
import { menu_info } from './book.content'
import style from './book.module.css'

export const Book = () => {
    const [promo, setPromo] = useState("basic promo + landing")
    const [build, setBuild] = useState(["basic promo + landing"])
    const calculateCost = (build) => {
        return "build total"
    }    
    const estimateBuildTime = (build) => {
        return "estimated build deadline"
    }
    const handleUpdatePromo = (item) => {
        setPromo(item)
    }
    const handleAddBuild = (item) => {
        setBuild([...build, item])
    }
    const handleRemoveBuild = (item) => {
        setBuild(build.filter((i)=>{
            return i !== item
        }))
    }
    useEffect(()=>{
        setPromo(build.at(-1))
    }, [build])
    return (
        <div className={style.book}>
            <Promo page={promo}/>
            <Menu menu={Object.keys(menu_info)} handleUpdatePromo={handleUpdatePromo}/>
            <BuildContainer build={build} cost={`cost`} time={`time`} handleRemoveBuild={handleRemoveBuild} handleUpdatePromo={handleUpdatePromo}/>
            <PromoInfoContainer item={promo} handleAddBuild={handleAddBuild}/>
        </div>
    )
}