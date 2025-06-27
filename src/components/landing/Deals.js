import { Deal } from './Deal'
import { deals_info } from './landing.content'
import { useComponentHeight } from '../../hooks/useComponentHeight'
import { useState, useEffect } from 'react'
import { getBackHeight, getFrontHeight, getPOS } from './landing.utils'
import style from './landing.module.css'

export const Deals = () => {
        const [dealsRef, dealsHeight] = useComponentHeight()
        
        
    return (
            <div ref={dealsRef} className={style.dealsContainer}>
                <div className={style.deals}>
                    <Deal 
                        content={deals_info.a} 
                        flipped={false} 
                        backHeight={getBackHeight(dealsHeight, 1)}
                        frontHeight={getFrontHeight(dealsHeight)}
                        pos={getPOS(1)}
                        />
                    <Deal 
                        content={deals_info.b} 
                        flipped={true} 
                        backHeight={getBackHeight(dealsHeight, 2)}
                        frontHeight={getFrontHeight(dealsHeight)}
                        pos={getPOS(2)}
                        />
                    <Deal 
                        content={deals_info.c} 
                        flipped={true} 
                        backHeight={getBackHeight(dealsHeight, 3)}
                        frontHeight={getFrontHeight(dealsHeight)}
                        pos={getPOS(3)}
                        />
                </div>
            </div>
    )
}

