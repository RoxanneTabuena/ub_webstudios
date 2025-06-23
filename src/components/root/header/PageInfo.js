import { useLocation } from 'react-router-dom'
import style from './header.module.css'
export const PageInfo = ({ height}) => {
    const {pathname} = useLocation()
    const title = pathname === '/' ? 'Welcome' : pathname.split('/')[1].toUpperCase()
    return (
        <div className={style.pageInfo}
            style={{
                height: height}}
        > 
            <h2>{title}</h2>
        </div>)}