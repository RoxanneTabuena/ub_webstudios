import style from './book.module.css'

export const PromoInfoCard = ({page}) => {

    return (
        <div className={style.promoInfoCard} style={{top: "calculated top"}}>
            <h2>PromoInfo</h2>
            <p>{page}</p>
        </div>
    )
}