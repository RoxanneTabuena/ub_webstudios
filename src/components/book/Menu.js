import { MenuItem } from './MenuItem'
import style from './book.module.css'

export const Menu = ({menu, handleUpdatePromo}) => {
    return (
        <div className={style.menu}>
            <h2>Menu</h2>
            {menu.map((item)=>{
                return <MenuItem key={item} item={item} handleUpdatePromo={handleUpdatePromo} />
            })}
        </div>
    )
}