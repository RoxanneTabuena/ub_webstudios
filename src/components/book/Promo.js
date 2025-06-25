import style from './book.module.css'

export const Promo = ({page}) => {

    return (
        <div className={style.promo}>
            <h2>Promo</h2>
            <p>{page}</p>
        </div>
    )
}