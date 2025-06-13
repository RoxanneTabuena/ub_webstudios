import { Banner } from './Banner'
import { Promo } from './Promo'
import style from './landing.module.css'

export const Landing = () => {


    return (
        <div className={style.landing}>
            <Banner />
            <Promo />
        </div>
    )
}