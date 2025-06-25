import { Menu } from './Menu'
import { Promo } from './Promo'
import { Build } from './Build'
import style from './book.module.css'

export const Book = () => {
    const calculateCost = (build) => {
        return "build total"
    }    
    const estimateBuildTime = (build) => {
        return "estimated build deadline"
    }

    return (
        <div className={style.book}>
            <Promo />
            <Menu />
            <Build build={[`option`]} cost={`cost`} time={`time`}/>
        </div>
    )
}