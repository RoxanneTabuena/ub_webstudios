import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu } from './Menu'
import { Promo } from './Promo'
import { BuildContainer } from './BuildContainer'
import {PromoInfoContainer} from './PromoInfoContainer'
import { menu_info } from './book.content'
import closeIcon from '../../assets/img/Close_Icon.png'
import style from './book.module.css'

export const Book = () => {
    const [promo, setPromo] = useState("basic promo + landing")
    const [build, setBuild] = useState(["basic promo + landing"])
    const navigate = useNavigate()
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
    const close = () =>{
        navigate(-1)
    }
    // update promo on build change
    useEffect(()=>{
        setPromo(build.at(-1))
    }, [build])
    return (
        <div className={style.book}>
            <img className={style.icon} src={closeIcon} alt="close Icon" onClick={close}></img>
            <Promo page={promo}/>
            <Menu menu={Object.keys(menu_info)} handleUpdatePromo={handleUpdatePromo}/>
            <BuildContainer build={build} handleRemoveBuild={handleRemoveBuild} handleUpdatePromo={handleUpdatePromo}/>
            <PromoInfoContainer item={promo} handleAddBuild={handleAddBuild} build={build}/>
        </div>
    )
}