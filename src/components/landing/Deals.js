import { Deal } from './Deal'
import { deals_info } from './landing.content'
import { useComponentHeight } from '../../hooks/useComponentHeight'
import { useState, useEffect } from 'react'
import { getBackHeight, getFrontHeight, getPOS } from './landing.utils'
import style from './landing.module.css'

export const Deals = ({halt}) => {
        const [dealsRef, dealsHeight] = useComponentHeight()
        const [feature, setFeature] = useState(1)
    useEffect(() => {
        if(!halt){
            const updateFeature = setInterval(() => {
                setFeature(prev=>{return prev === 3? 1: prev+1});
            }, 2000);
    
                return () => clearInterval(updateFeature);
        }
        }, [halt]);
    return (
            <div ref={dealsRef} className={style.dealsContainer}>
                <div className={style.deals}>
                    <Deal 
                        content={deals_info.a} 
                        feature={feature}
                        queue={1}
                        backHeight={getBackHeight(dealsHeight, 1)}
                        frontHeight={getFrontHeight(dealsHeight)}
                        pos={getPOS(1)}
                        />
                    <Deal 
                        content={deals_info.b} 
                        feature={feature}
                        queue={2}
                        backHeight={getBackHeight(dealsHeight, 2)}
                        frontHeight={getFrontHeight(dealsHeight)}
                        pos={getPOS(2)}
                        />
                    <Deal 
                        content={deals_info.c} 
                        feature={feature}
                        queue={3}
                        backHeight={getBackHeight(dealsHeight, 3)}
                        frontHeight={getFrontHeight(dealsHeight)}
                        pos={getPOS(3)}
                        />
                </div>
            </div>
    )
}

