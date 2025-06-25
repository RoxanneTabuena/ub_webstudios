import { useState, useEffect } from 'react'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { PromoInfo } from './PromoInfo'
import style from './book.module.css'

export const PromoInfoContainer = ({item, handleAddBuild, build}) => {
    const [visible, setVisible] = useState(true)
    const {width} = useWindowDimensions()
    const handleToggleVisible = () => {
        setVisible(!visible)
    }
    useEffect(()=>{
        console.log(width)
    },[visible])
    return (
        <div className={style.promoInfoContainer}
        style={{
            transform: `${!visible ? `translateX(${width*.45}px)` : ''}`,
        }}>
            <PromoInfo 
                item={item} 
                handleAddBuild={handleAddBuild} 
                build={build}
                handleToggleVisible={handleToggleVisible}/>
        </div>
    )
}