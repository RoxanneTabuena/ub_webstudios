import { useOrientation } from '../../hooks/useOrientation'
import { NavButton } from '../../blocks/NavButton'
import demoGif from '../../assets/img/Demo_Pic.png'
import style from './landing.module.css'

export const Banner = () => {
    const orientation = useOrientation()
    const head = 
            <div className={style.bannerHead}>
                <div className={style.left}>
                    <h4>next-level</h4>
                    <h2>Bespoke Websites</h2>
                </div>
                <div className={style.tops}>
                    <h4>for</h4>
                    <div>
                        <h2>Small and Mirco</h2>
                        <h2>Businesses</h2>
                    </div>
                </div>
            </div>
    const demo = 
        <img src={demoGif} alt="a laptop and phone showing responsive versions of the same website"></img>
    const text = 
        <p>No page builders or WordPress. We offer 100% hand-coded websites with superior results starting at $175/mo as well as Google Ads and SEO services.</p>
    const links = 
            <div className={style.bannerButts}>
                <NavButton text="start quote" path="/book"/>
                <NavButton text="about studio" path="/about" backgroundColor="fuchsia"/>
            </div>
    return (
            orientation === 'portrait'?
                <div className={style.banner}>
                    {head}
                    {demo}
                    {text}
                    {links}
                </div> 
            :
                <div className={style.banner}>
                    <div className={style.bannerLeft}>
                        {head}
                        {text}
                        {links}
                    </div>
                    {demo}
                </div>        
    )
}

