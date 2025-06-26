
import style from './landing.module.css'

export const Banner = () => {
    return (
            <div className={style.banner}>
                <div className={style.topSec}>
                    <h4>next-level</h4>
                    <h2>Bespoke Websites</h2>
                </div>
                <div className={style.bottomSec}>
                    <h4>for</h4>
                    <div>
                        <h2>Small and Mirco</h2>
                        <h2>Businesses</h2>
                    </div>
                </div>
            </div>
    )
}

