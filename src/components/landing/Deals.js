import { Standard } from './Standard'
import { Deluxe } from './Deluxe'
import { useComponentHeight} from '../../hooks/useComponentHeight'
import { getPosFromHeight } from './landing.utils'
import { useState, useEffect } from 'react'
import style from './landing.module.css'

export const Deals = () => {
    const [dealsRef, dealsHeight] = useComponentHeight()
    const [deluxe, setDeluxe] = useState(false)
    const pos_info = getPosFromHeight(dealsHeight)
    useEffect(()=>{

    },[deluxe])
    return (
            <div ref={dealsRef} className={style.dealsContainer}>
                <div className={style.deals} onClick={()=>setDeluxe(!deluxe)}>
                    <Standard widthFactor={1} bottom={pos_info.a.bottom} right={pos_info.a.right}/>
                    {deluxe &&
                    <Deluxe height={dealsHeight}/>
                    }
                </div>
            </div>
    )
}

