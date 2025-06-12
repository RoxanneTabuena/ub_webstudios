import { useOrientation } from '../../hooks/useOrientation'
import { NavButton } from '../../blocks/NavButton'
import demo from '../../assets/img/Demo_Pic.png'
import style from './landing.module.css'

export const Banner = () => {
    const orientation = useOrientation()
    return (
        <div className={style.banner}>
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
            <div className={style.bannerButts}>
                <NavButton text="start quote" path="/book"/>
                <NavButton text="about studio" path="/about" backgroundColor="fuchsia"/>
            </div>
            <p style={{textAlign: `${orientation === 'portrait' && 'center'}`}}>No page builders or WordPress. We offer 100% hand-coded websites with superior results starting at $175/mo as well as Google Ads and SEO services.</p>
            <img src={demo} alt="a laptop and phone showing responsive versions of the same website"></img>
        </div>
    )
}