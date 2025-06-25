import style from './book.module.css'

export const PromoInfo = ({item, handleAddBuild, build, handleToggleVisible}) => {

    return (
        <div className={style.promoInfo} style={{top: "calculated top"}}>
            <h2>PromoInfo</h2>
            <p>{item}</p>
            {!build.includes(item) &&
                <p onClick={()=>handleAddBuild(item)}>{`add ${item} to build`}</p>
            }
            <p onClick={()=>handleToggleVisible()}>hide</p>
        </div>
    )
}