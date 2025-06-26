import { Banner } from './Banner'
import { Formats } from './Formats'
import style from './landing.module.css'

export const Landing = () => {


    return (
        <div className={style.landing}>
            <Banner />
            <Formats />
        </div>
    )
}