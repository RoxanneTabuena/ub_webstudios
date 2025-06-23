import { useLocation } from 'react-router-dom'
import style from '../root.module.css'
export const PageInfo = ({ height, marginTop}) => {
    const {pathname} = useLocation()
    const title = pathname === '/' ? 'Welcome' : pathname.split('/')[1]
    return (
        <div className={style.pageInfo}
            style={{
                height: height, 
                marginTop: `${marginTop === true && '10px'}`}}
        > 
            <h2>{title}</h2>
        </div>)}