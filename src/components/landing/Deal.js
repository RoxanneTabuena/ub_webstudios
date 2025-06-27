import { Front } from './Front'
import { Back } from './Back'
import style from './landing.module.css'

export const Deal = ({content, flipped, backHeight, frontHeight, pos}) => {

    return (
            <div className={style.deal}
                style={{bottom: pos.bottom, right: pos.right}}
            >
                {flipped?
                <Back height={backHeight}/> : <Front content={content} height={frontHeight}/>
                }
            </div>
    )
}

