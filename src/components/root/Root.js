import { useRef, useState } from 'react'
import { useScrollMetrics } from '../../hooks/useScrollMetrics'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Scroller} from './Scroller'
import style from "./root.module.css"


export const Root = () => {
    const mainRef = useRef(null)
    const {height} = useWindowDimensions()
    const { scrollTop, scrollHeight } = useScrollMetrics(mainRef)
    const [ scrollWidth, setScrollWidth] = useState(10)
    const handleWidthChange = (width) => {
        setScrollWidth(width)
    }
    const handleScrollClick = (e) => {
        mainRef.current.scrollTo({
            top: e.clientY*scrollHeight/height
        })
    }
    return (
        <div className={style.root}>
            <div 
                className={style.scrollEvents}
                style={{width: `${scrollWidth}px`}}
                onClick={handleScrollClick}
            >

            </div>
            <Scroller 
                text="unboundgraphics" 
                color="black" 
                totalHeight={scrollHeight} 
                position={scrollTop}
                handleWidthChange={handleWidthChange}
                />
            <Header />
            <main ref={mainRef}>
                <Outlet/>
            </main>
            <Footer />
        </div>
    )
}
