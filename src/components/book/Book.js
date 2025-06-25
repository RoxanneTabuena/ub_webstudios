import { Menu } from './Menu'
import { Promo } from './Promo'
import { Build } from './Build'
import style from './book.module.css'

export const Book = () => {

    return (
        <div className={style.book}>
            <Promo />
            <Menu />
            <Build />
        </div>
    )
}