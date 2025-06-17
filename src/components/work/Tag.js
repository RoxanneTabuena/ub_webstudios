import { NavButton } from '../../blocks/NavButton'
import style from './work.module.css'

export const Tag = ({tag}) => {

    return (
        <div className={style.tag}>
            <NavButton path={`/work/${tag}`} text={tag} size={"small"} backgroundColor={"fuchsia"}/>
        </div>
    )
}