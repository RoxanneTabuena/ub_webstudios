import style from './book.module.css'

export const BuildItem = ({item, handleUpdatePromo, handleRemoveBuild}) => {
    return (
        <div className={style.buildItem} onClick={()=>{handleUpdatePromo(item)}}>
            <div>
                {
                    item !== "basic promo + landing" &&
                    <p onClick={()=>{handleRemoveBuild(item)}}>X</p>
                }
                <p>{item}</p>
            </div>
        </div>
    )
}