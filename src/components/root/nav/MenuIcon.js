import openIcon from '../../../assets/img/Menu_Icon.png'
import closeIcon from '../../../assets/img/Close_Icon.png'
import style from './nav.module.css'

export const MenuIcon = ({open}) => {
    const menu = 
        <img src={openIcon} alt="menu icon"></img>
    const close = 
        <img src={closeIcon} alt="close icon"></img>
    return (
        <div>
            {open === true ? close : menu}
        </div>
    )
}