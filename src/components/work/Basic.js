import { NavButton } from '../../blocks/NavButton'
import style from './work.module.css'
export const Basic = ({title, launch, tags, color}) => {
    return (<div>
            <div className={style.title}>
                <h3>{title}</h3>
                <h3>{launch}</h3>
            </div>
            <div className={style.tags}>
                {tags.map((tag, i)=>{
                    return <NavButton 
                    key={tag} 
                    fontSize="mini" 
                    path={`/work/${tag}`} 
                    text={`${tag}${i===tags.length-1 ? '' : ','}`} 
                    textColor={color} 
                    backgroundColor="transparent"
                    font='Titles'
                    />
                })}
            </div>
            </div>)
}