import { useRef, useState, useEffect } from 'react'
import { useScrollMetrics } from '../../hooks/useScrollMetrics'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { useComponentHeight } from '../../hooks/useComponentHeight'
import { ScrollToTop } from '../../hooks/ScrollToTop'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Scroller} from './Scroller'
import style from "./root.module.css"


export const Root = () => {
    // header related variables
    const [headerRef, headerHeight] = useComponentHeight()
    // scroller related variables
    const mainRef = useRef(null)
    const {height, width} = useWindowDimensions()
    const { scrollTop, scrollHeight } = useScrollMetrics(mainRef)
    const [ scrollWidth, setScrollWidth] = useState(10)
    // scroller related handlers
    const handleWidthChange = (width) => {
        setScrollWidth(width)
    }
    const handleScrollClick = (e) => {
        mainRef.current.scrollTo({
            top: ((e.clientY-headerHeight)*scrollHeight/(height))
        })
    }
    return (
        <div className={style.root}>
            <div 
                className={style.scrollEvents}
                style={{
                    width: `${scrollWidth}px`,
                    top: headerHeight
                }}
                onClick={handleScrollClick}
            >
            </div>
            <ScrollToTop ref={mainRef}/>
            <Scroller 
                text="UNBOUNDSTUDIO" 
                color="rgba(255,255,255,.66)" 
                totalHeight={scrollHeight} 
                position={scrollTop}
                handleWidthChange={handleWidthChange}
                headerHeight={headerHeight}
                />
            <Header headerRef={headerRef} logoRatio={headerHeight-scrollTop}/>
            <main 
                ref={mainRef}
                style={{
                    paddingTop: `${headerHeight}px`,
                    }}>
                <Outlet/>
            </main>
            <Footer />
        </div>
    )
}
