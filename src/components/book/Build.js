import style from './book.module.css'
import { menu_info } from './book.content'

export const Build = ({build}) => {
    const calculateCost = (build) => {
        return "build total"
    }    
    const estimateBuildTime = (build) => {
        return "estimated build deadline"
    }
    // toggle payment plan / lump sum
    return (
        <div className={style.build}>
            <h2>Build</h2>
            <p>
                cur build selections, est cost, est time
            </p>
        </div>
    )
}