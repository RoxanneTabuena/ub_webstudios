
import { Basic } from './Basic'
import { Content } from './Content'
import style from './work.module.css'
export const Read = ({handleFlip, info, title}) => {
    const {demo, demoAlt, tags, color, launch} = info
    return (
        <div>
            <div onClick={handleFlip} className={style.read}>
                <img className={style.background} src={demo} alt={demoAlt}></img>
                <Content info={info} />
            </div>
            <Basic title={title} tags={tags} color={color} launch={launch}/>
            </div>)
}