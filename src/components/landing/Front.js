import style from './landing.module.css'

export const Front = ({content}) => {
    
    return (
            <div className={style.front}>
                    <h3>{content.text}</h3>
                    <p className={style.title}>for only</p>
                    <div className={style.price}>
                        <h2>{content.price}</h2>
                        <p>$</p>
                    </div>

            </div>
    )
}

