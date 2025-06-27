import { useEffect, useState } from 'react'
import { Front } from './Front'
import { Back } from './Back'
import style from './landing.module.css'

export const Deal = ({content, feature, queue, backHeight, frontHeight, pos}) => {
    const [flipped, setFlipped] = useState(feature===queue)
    useEffect(()=>{
        if(feature === queue){
            setFlipped(false)
        }else{
            setFlipped(true)
        }
    }, [feature])
    return (
            <div className={style.deal}
                style={{bottom: pos.bottom, right: pos.right, height:frontHeight}}
                onClick={()=> handleManualFeature(queue)}
            >
                {flipped?
                <Back height={backHeight}/> : <Front content={content} height={frontHeight}/>
                }
            </div>
    )
}

