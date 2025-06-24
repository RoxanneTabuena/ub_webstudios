import openIcon from '../../../assets/img/Menu_Icon.png'
import closeIcon from '../../../assets/img/Close_Icon.png'
import style from './nav.module.css'

export const MenuIcon = ({open, iconHeight}) => {
    const menu = 
        <img className={style.open}
            src={openIcon} alt="menu icon"
            style={{
                height: iconHeight,
                minWidth: iconHeight
            }}
        ></img>
    const close = 
        <img 
            src={closeIcon} alt="close icon" 
            style={{
                height: iconHeight*.8,
                minWidth: iconHeight*.8
            }}
        ></img>
    return (
        <div className={style.icon}>
            {open === true ? close : menu}
        </div>
    )
}