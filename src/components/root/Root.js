import { useRef, useState, useEffect } from 'react'
import { useScrollMetrics } from '../../hooks/useScrollMetrics'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { useComponentHeight } from '../../hooks/useComponentHeight'
import { ScrollToTop } from '../../hooks/ScrollToTop'
import { useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Header } from './header/Header'
import { Footer } from './Footer'
import { Scroller} from './Scroller'
import { Book } from '../book/Book'
import style from "./root.module.css"


export const Root = () => {
    // get path
    const {pathname} = useLocation()
    // header related variables
    const [headerRef, headerHeight] = useComponentHeight()
    // controll scroll on
    const [scrollOn, setScrollOn] = useState(true)
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
    // update scroller visibility on path change
    useEffect(()=>{
        let scrollingPaths = ['/work', '/about']
        const scrolls = scrollingPaths.some((p)=>pathname.includes(p))
        setScrollOn(scrolls)
    },[pathname])
    
    return (
        <div className={style.root}>
            {pathname === '/book' ? 
                <Book />
                :
                <div className={style.body}>
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
                        color="rgb(255,255,255)" 
                        totalHeight={scrollHeight} 
                        position={scrollTop}
                        handleWidthChange={handleWidthChange}
                        headerHeight={headerHeight}
                        on={scrollOn}
                        />
                    <Header headerRef={headerRef} scrollY={scrollTop}/>
                    <main 
                        ref={mainRef}
                        style={{
                            paddingTop: `${headerHeight}px`,
                            }}>
                        <Outlet context={headerHeight} />
                    </main>
                    <Footer />
                </div>
            }
        </div>
    )
}
