
import { Basic } from './Basic'
import { Demo } from './Demo'
import style from './work.module.css'
export const Cover = ({handleFlip, featured, title, info}) => {
    const { featureDemo, demo, demoAlt, featureDemoAlt, tags, color, launch} = info
    return (
        <div className={style.cover}>
            <div onClick={handleFlip}> 
                { featured && featureDemo ?
                <Demo src={featureDemo} alt={featureDemoAlt}/>
                :
                <Demo src={demo} alt={demoAlt}/>
                }
            </div>
            <Basic title={title} tags={tags} color={color} launch={launch}/>
        </div>)}