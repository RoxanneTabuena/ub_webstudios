import { useIsVisible } from '../../hooks/useIsVisible'
import { useEffect, useState } from 'react'
import { NavButton } from '../../blocks/NavButton'
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
        color,
        services} = info
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
        }else if(featured){
            handleSwitch(null)
        }
    },[bVisible, tVisible, featured])
    const basic = (<div>
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
    const expand = (
        <div className={style.expand}>
            <img className={style.background} src={demo} alt={demoAlt}></img>
            <div className={style.content}>
                <a href={site} className={style.visit}>

                    <img src={logo} alt={`${title} logo`}></img>
                    <p>visit site</p>
                </a>
                <p>{description}</p>
                <div className={style.tags}>
                    <p>services provided:</p>
                    {services.map((tag, i)=>{
                        return <NavButton 
                        key={tag} 
                        fontSize="mini" 
                        path={`/work/${tag}`} 
                        text={`${tag}${i===tags.length-1 ? '' : ','}`} 
                        textColor={color} 
                        backgroundColor="transparent"
                        />
                    })}
                </div>
                {basic}
            </div>
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
            {basic}
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