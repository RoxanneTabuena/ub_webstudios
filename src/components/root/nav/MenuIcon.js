import openIcon from '../../../assets/img/Menu_Icon.png'
import closeIcon from '../../../assets/img/Close_Icon.png'
import style from './nav.module.css'

export const MenuIcon = ({open, handleMenuToggle, iconHeight}) => {
    console.log(iconHeight)
    const menu = 
        <img src={openIcon} alt="menu icon"
        style={{
            height: iconHeight,
            minWidth: iconHeight
        }}
        ></img>
    const close = 
        <img src={closeIcon} alt="close icon"
        style={{
            height: iconHeight,
            minWidth: iconHeight
        }}
        ></img>
    return (
        <div onClick={handleMenuToggle} className={style.icon} >
            {open === true ? close : menu}
        </div>
    )
}