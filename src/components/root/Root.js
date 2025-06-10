import { useRef, useState } from 'react'
import { useScrollMetrics } from '../../hooks/useScrollMetrics'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { useComponentHeight } from '../../hooks/useComponentHeight'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Scroller} from './Scroller'
import style from "./root.module.css"


export const Root = () => {
    // scroller related variables
    const mainRef = useRef(null)
    const {height} = useWindowDimensions()
    const { scrollTop, scrollHeight } = useScrollMetrics(mainRef)
    const [ scrollWidth, setScrollWidth] = useState(10)
    // header related variables
    const [headerRef, headerHeight] = useComponentHeight()
    // scroller related handlers
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
                text="UNBOUNDSTUDIO" 
                color="white" 
                totalHeight={scrollHeight} 
                position={scrollTop}
                handleWidthChange={handleWidthChange}
                headerHeight={headerHeight}
                />
            <Header headerRef={headerRef}/>
            <main 
                ref={mainRef}
                style={{paddingTop: `${headerHeight}px`}}>
                <Outlet/>
            </main>
            <Footer />
        </div>
    )
}
