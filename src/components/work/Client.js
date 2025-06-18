import { useIsVisible } from '../../hooks/useIsVisible'
import { useEffect, useState } from 'react'
import style from './work.module.css'
export const Client = ({title,info,featured,handleSwitch}) => {
    const {
        tags, 
        description, 
        site, 
        logo,
        launch,
        featureDemo,
        featureDemoAlt, 
        demo, 
        demoAlt, 
        color} = info
    const [bottomRef, bVisible] = useIsVisible({options:{
        threshold: 1
    }})
    const [topRef, tVisible] = useIsVisible({options:{
        threshold: 1
    }})
    const [flip, setFlip] = useState(false)
    useEffect(()=>{
        if(bVisible && tVisible){
            handleSwitch(title)
            console.log('switch ', title)
        }else if(featured){
            handleSwitch(null)
        }
    },[bVisible, tVisible, featured])
    const expand = (
        <div className={style.expand}>
            <div className={style.side}>
                <img className={style.demo} src={demo} alt={demoAlt}></img>
                <div className={style.center}>
                    <a href={site}> 
                        <img src={logo} alt={`${title} logo`}></img>
                    </a>
                    <p>{`visit ${title} site`}</p>
                </div>
            </div>
            <h3>{title}</h3>
            {/* title, img, tags, description, visit */}
        </div>)
    const contract = (
        <div className={style.contract}>
            {/* demo, title, tags */}
            { featured && featureDemo ?
                <img className={style.demo} src={featureDemo} alt={featureDemoAlt}></img>
                :
                <img className={style.demo} src={demo} alt={demoAlt}></img>
            }
            <div className={style.side}>
                <h3>{title}</h3>
                <h3>{launch}</h3>
            </div>
        </div>)
    return (
        <div 
            className={style.client}
            style={{color: color}}
            onClick={()=>{setFlip(!flip)}}
        >
            <span ref={topRef} className={style.top}></span>
            {!flip ? contract : expand}
            <span ref={bottomRef} className={style.bottom}></span>
        </div>
    )
}