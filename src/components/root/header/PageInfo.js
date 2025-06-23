import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import style from './header.module.css'
export const PageInfo = ({ height}) => {
    const {pathname} = useLocation()
    const title = pathname === '/' ? 'Welcome' : pathname.split('/')[1]
    return (
        <div className={style.pageInfo}
            style={{
                height: height}}
        > 
        <NavLink to={pathname !== '/' ? `/${title}` : '/'}>
            <h2>{title.toUpperCase()}</h2>
        </NavLink>
        </div>)}