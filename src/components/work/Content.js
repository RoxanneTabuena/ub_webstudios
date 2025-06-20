
import { NavButton } from '../../blocks/NavButton'
import { Visit } from './Visit'
import style from './work.module.css'
export const Content = ({info}) => {
    const {site, color, logo, title, description, inDepth} = info
    return (<div className={style.content}>
                    <Visit site={site} color={color} logo={logo} title={title}/>
                    <p>{description}</p>
                    {inDepth && 
                        <NavButton 
                                fontSize="mini" 
                                path={`/caseStudy/${title}`} 
                                text={`view case study`}
                                size="small"
                                font='Rare'
                                backgroundColor={color}
                                />
                    }
            </div>
    )
}