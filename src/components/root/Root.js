import { useRef } from 'react'
import { useScrollMetrics } from '../../hooks/useScrollMetrics'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Scroller} from './Scroller'
import style from "./root.module.css"


export const Root = () => {
    const mainRef = useRef(null)
    const { scrollTop, scrollHeight } = useScrollMetrics(mainRef)
   
    return (
        <div className={style.root}>
            <Scroller text="unboundgraphics" color="black" totalHeight={scrollHeight} position={scrollTop}/>
            <Header />
            <main ref={mainRef}>
                <Outlet/>
            </main>
            <Footer />
        </div>
    )
}
