
import style from './work.module.css'
export const Visit = ({site, color, logo, title}) => {
    return (<a 
                    href={site} 
                    className={style.visit}
                    style={{
                        border: `2px solid ${color}`
                    }}
                >

                    <img className={style.logo} src={logo} alt={`${title} logo`}></img>
                    <p>visit</p>
            </a>
    )
}