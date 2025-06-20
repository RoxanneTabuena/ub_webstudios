import { Filter } from './Filter'
import { Clients } from './Clients'
import style from './work.module.css'

export const Work = () => {

    return (
        <div className={style.work}>
            <Filter/>
            <Clients />
        </div>
    )
}