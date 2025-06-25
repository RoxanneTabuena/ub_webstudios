import style from './book.module.css'

export const PromoInfo = ({item, handleAddBuild}) => {

    return (
        <div className={style.promoInfo} style={{top: "calculated top"}}>
            <h2>PromoInfo</h2>
            <p>{item}</p>
            <p onClick={()=>handleAddBuild(item)}>{`add ${item} to build`}</p>
        </div>
    )
}