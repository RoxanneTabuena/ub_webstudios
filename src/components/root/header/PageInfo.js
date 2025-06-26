import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import style from './header.module.css'
export const PageInfo = ({ height}) => {
    const {pathname} = useLocation()
    const title = pathname === '/' ? 'Welcome' : pathname.split('/')[1]
    // set font height according to icon height
    const letterHeight = useRef(height/2.2)
    return (
        <div className={style.pageInfo}
            style={{
                height: height}}
        >
        <NavLink to={pathname !== '/' ? `/${title}` : '/'}>
            <h2 style = {{
                fontSize: letterHeight.current
            }}
            >{title.toUpperCase()}</h2>
        </NavLink>
        </div>)}