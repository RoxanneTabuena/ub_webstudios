import style from './book.module.css'

export const MenuItem = ({item, handleUpdatePromo}) => {
    return (
        <div className={style.menuItem}>
           <p onClick={()=>{handleUpdatePromo(item)}}>{item}</p>
        </div>
    )
}